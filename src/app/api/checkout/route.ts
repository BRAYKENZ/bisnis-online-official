
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const serverKey = process.env.MIDTRANS_SERVER_KEY;
    if (!serverKey) {
      return NextResponse.json({ message: "MIDTRANS_SERVER_KEY belum diatur." }, { status: 400 });
    }
    const orderId = "BOO-" + Date.now();

    const payload = {
      transaction_details: {
        order_id: orderId,
        gross_amount: body.total || 0,
      },
      credit_card: { secure: true },
      item_details: (body.items || []).map((it: any) => ({
        id: it.id, price: it.price, quantity: it.qty, name: it.name
      })),
      callbacks: {
        finish: process.env.NEXT_PUBLIC_BASE_URL ? `${process.env.NEXT_PUBLIC_BASE_URL}/success` : undefined
      }
    };

    const resp = await fetch("https://app.sandbox.midtrans.com/snap/v1/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Basic " + Buffer.from(serverKey + ":").toString("base64")
      },
      body: JSON.stringify(payload)
    });

    const data = await resp.json();
    if (!resp.ok) {
      console.error("Midtrans error:", data);
      return NextResponse.json({ message: data?.error_messages?.[0] || "Gagal membuat transaksi" }, { status: 500 });
    }
    return NextResponse.json({ token: data.token, redirect_url: data.redirect_url });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
