// app/api/quotation/route.js
import { forwardPost } from "@lib/apiPostHelper";

export async function POST(req) {
  const restructureFn = (body) => {
    const { name, email, phone, site, service, message } = body;
    return {
      data: {
        Client: name,
        Email: email,
        Phone: phone,
        Link: site,
        Service: service,
        Message: message,
      },
    };
  };

  const externalUrl = process.env.REQUEST_QUOTATION_URL;

  return await forwardPost(req, restructureFn, externalUrl);
}
