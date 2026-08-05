import { NextResponse } from "next/server";
import { KICK_SLUG } from "@/config/site";

let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string | null> {
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    return cachedToken.value;
  }

  const clientId = process.env.KICK_CLIENT_ID;
  const clientSecret = process.env.KICK_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.error("KICK_CLIENT_ID / KICK_CLIENT_SECRET is not set");
    return null;
  }

  const res = await fetch("https://id.kick.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("kick oauth token error", res.status, await res.text());
    return null;
  }

  const data = await res.json();
  cachedToken = {
    value: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };

  return cachedToken.value;
}

export async function GET() {
  try {
    const token = await getAccessToken();
    if (!token) {
      return NextResponse.json({ live: false });
    }

    const res = await fetch(
      `https://api.kick.com/public/v1/channels?slug=${KICK_SLUG}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("kick channels error", res.status, await res.text());
      return NextResponse.json({ live: false });
    }

    const data = await res.json();
    const isLive = Boolean(data?.data?.[0]?.stream?.is_live);

    return NextResponse.json({ live: isLive });
  } catch (err) {
    console.error("kick-status error", err);
    return NextResponse.json({ live: false });
  }
}
