import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  description: string;
  address: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const quoteData: QuoteRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "Expert Topographe <onboarding@resend.dev>",
      to: ["kamoherve78@gmail.com"],
      subject: `Nouvelle demande de devis - ${quoteData.name}`,
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom :</strong> ${quoteData.name}</p>
        <p><strong>Email :</strong> ${quoteData.email}</p>
        <p><strong>Téléphone :</strong> ${quoteData.phone}</p>
        <p><strong>Type de projet :</strong> ${quoteData.projectType}</p>
        <p><strong>Adresse :</strong> ${quoteData.address}</p>
        <p><strong>Description :</strong></p>
        <p>${quoteData.description}</p>
      `,
    });

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending quote email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);