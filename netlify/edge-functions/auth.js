import passwords from "../passwords.js";

const denied = () =>
  new Response(
    `<!doctype html><html lang="fr"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Accès réservé</title><body style="font-family:system-ui,sans-serif;max-width:30rem;margin:4rem auto;padding:0 1rem"><h1>Accès réservé</h1><p>Identifiant et mot de passe nécessaires. Recharge la page pour réessayer.</p></body></html>`,
    {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Revision", charset="UTF-8"',
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
    },
  );

// Comparaison sans court-circuit pour ne rien laisser deviner par le temps de réponse.
const same = (a, b) => {
  const x = new TextEncoder().encode(a), y = new TextEncoder().encode(b);
  let d = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) d |= (x[i] ?? 0) ^ (y[i] ?? 0);
  return d === 0;
};

export default async (request, context) => {
  const header = request.headers.get("authorization") || "";
  const m = header.match(/^Basic\s+(.+)$/i);
  if (!m) return denied();
  let decoded;
  try {
    const bytes = Uint8Array.from(atob(m[1]), (c) => c.charCodeAt(0));
    decoded = new TextDecoder("utf-8").decode(bytes);
  } catch {
    return denied();
  }
  const i = decoded.indexOf(":");
  if (i < 0) return denied();
  const user = decoded.slice(0, i), pass = decoded.slice(i + 1);
  const expected = Object.prototype.hasOwnProperty.call(passwords, user) ? passwords[user] : null;
  if (expected === null || !same(pass, String(expected))) return denied();
  return context.next();
};
