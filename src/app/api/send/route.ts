import NoSpendChallengeWelcomeEmail from "@/app/components/email/welcome";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Débora Buriti <debora@nospendchallenge.app>",
      to: [email],
      subject: "Welcome to the #NoSpendChallenge",
      react: NoSpendChallengeWelcomeEmail(),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
