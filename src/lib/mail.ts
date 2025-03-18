"use server"; // ✅ Garante que o código só rode no lado do servidor

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function sendEmail(subject: string, text: string) {
  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject,
      text,
    });
    console.log("E-mail enviado com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
  }
}
