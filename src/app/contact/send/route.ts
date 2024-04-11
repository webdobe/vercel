const nodemailer = require("nodemailer");
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST || "smtp.gmail.com",
  port: process.env.NODEMAILER_PORT || 465,
  secure: process.env.NODEMAILER_SECURE || true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.NODEMAILER_USERNAME,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

type ResponseData = {
    status?: string;
    message?: string;
};
  
export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("SERVERS BODY", body);
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: body.email, // sender address
            to: "webdobe@gmail.com", // list of receivers
            subject: `My Vercel Contact: ${body.name}`, // Subject line
            text: body.message, // plain text body
            html: `<b>${body.message}</b>`, // html body
        });
        return NextResponse.json({
            status: "success",
            message: "Thank you for contacting me, I will response ASAP."
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            status: "error",
            message: "Oops, something went wrong."
        });
    }
    
}