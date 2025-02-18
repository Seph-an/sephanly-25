// app/api/inquiry/route.js
import { forwardPost } from "@lib/apiPostHelper";

export async function POST(req) {
  const restructureFn = (body) => {
    const { name, email, message } = body;
    return { data: { Client: name, Email: email, Message: message } };
  };
  const externalUrl = process.env.MAKE_INQUIRY_URL;

  return await forwardPost(req, restructureFn, externalUrl);
}
