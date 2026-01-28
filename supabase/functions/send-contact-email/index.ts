import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");



const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message }: ContactRequest = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      throw new Error("Faltan campos obligatorios: nombre, email y mensaje son requeridos");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("El formato del email no es válido");
    }

    // Validate field lengths
    if (name.length > 100) {
      throw new Error("El nombre es demasiado largo (máximo 100 caracteres)");
    }
    if (email.length > 255) {
      throw new Error("El email es demasiado largo (máximo 255 caracteres)");
    }
    if (message.length > 5000) {
      throw new Error("El mensaje es demasiado largo (máximo 5000 caracteres)");
    }

    const serviceLabels: Record<string, string> = {
      "electricidad": "Instalaciones Eléctricas",
      "solar": "Energías Renovables",
      "carga-ve": "Puntos de Carga VE",
      "climatizacion": "Climatización",
      "gestion": "Gestión Energética",
      "otro": "Otro",
    };

    const serviceName = service ? serviceLabels[service] || service : "No especificado";

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY no está configurado");
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Enerta Future <noreply@enertafuture.es>",
        to: ["Info@enerta.es"],
        subject: `Nuevo contacto web: ${name}`,
        html: `
          <h2>Nuevo mensaje de contacto desde la web</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
          <p><strong>Servicio de interés:</strong> ${serviceName}</p>
          <hr />
          <h3>Mensaje:</h3>
          <p>${message.replace(/\n/g, "<br />")}</p>
        `,
        reply_to: email,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Resend API error:", errorData);
      throw new Error("Error al enviar el email");
    }

    const responseData = await emailResponse.json();
    console.log("Contact email sent successfully:", responseData);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    console.error("Error in send-contact-email function:", error);
    const errorMessage = error instanceof Error ? error.message : "Error desconocido";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
