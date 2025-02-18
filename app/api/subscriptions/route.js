// app/api/subscriptions/route.js
import { forwardPost } from "@lib/apiPostHelper";

export async function POST(req) {
  const restructureFn = (body) => {
    const { email } = body;
    return { data: { Email: email } };
  };

  const externalUrl = process.env.SUBSCRIBE_URL;

  return await forwardPost(req, restructureFn, externalUrl);
}
