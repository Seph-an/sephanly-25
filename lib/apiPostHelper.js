// lib/apiHelper.js
import axios from "axios";
import { NextResponse } from "next/server";

export async function forwardPost(req, restructureFn, externalUrl) {
  try {
    const body = await req.json();
    console.log("The body data :", body);
    const payload = restructureFn(body);
    console.log("The restructured data :", payload);

    const token = process.env.CREATE_RECORDS_TOKEN;

    // Make the POST request to the external API
    const response = await axios.post(externalUrl, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      timeout: 5000,
    });

    return NextResponse.json(
      { success: true, data: response.data },
      { status: response.status }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.response?.data?.error?.message || error.message,
      },
      { status: error.response?.status || 500 }
    );
  }
}
