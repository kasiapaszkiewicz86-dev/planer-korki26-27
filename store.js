import { getStore } from "@netlify/blobs";

export default async (req) => {
  const url = new URL(req.url);
  const key = url.searchParams.get("key");

  if (!key) {
    return new Response(JSON.stringify({ error: "Brak parametru key" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  const store = getStore({ name: "planer-korki", consistency: "strong" });
  const noCacheHeaders = {
    "Content-Type": "application/json",
    "Cache-Control": "no-store, no-cache, must-revalidate"
  };

  if (req.method === "GET") {
    const value = await store.get(key);
    return new Response(value ?? "null", {
      status: 200,
      headers: noCacheHeaders
    });
  }

  if (req.method === "POST") {
    const body = await req.text();
    await store.set(key, body);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: noCacheHeaders
    });
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config = { path: "/api/store" };
