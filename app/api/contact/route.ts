import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const data = await req.json()

  try {
    await resend.emails.send({
      from: "Amity Tourism <onboarding@resend.dev>", // works immediately
      to: "altifygenerator@gmail.com", // 👈 PUT YOUR EMAIL HERE
      subject: "New Business Inquiry",
      html: `
        <h2>New Business Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Business:</strong> ${data.business}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error(error)
    return Response.json({ error: "Email failed" }, { status: 500 })
  }
}