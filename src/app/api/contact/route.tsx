import { NextResponse } from "next/server";

export async function POST(request) {
    require('dotenv').config
    const data=await request.json()
    let nodemailer = require('nodemailer')
    try{
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            service: "gmail",

            auth:{
                user: 'moinul.rocks@gmail.com',
                pass: 'gnmlqclilkeosaks'
            }
        })
        const info = await transporter.sendMail({
            from: `"${data.name}"`,
            to: 'moinul.rocks@gmail.com',
            subject: `Inquiry from Nibir's Portfolio`,
            text: "",
            html: `
                <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border: 2px solid #48AEDD;
            border-radius: 10px;
        }
      
        p {
            font-size: 20px;
            line-height: 1.5;
            margin-bottom: 10px;
            border: 2px solid #48AEDD;
            border-radius: 50px 20px;
            background-color: #48AEDD;
            color: white;
            padding: 5px;
            text-align: center;
            font-weight: 900;
        }
        ul { 
            list-style-type: none;
            padding: 0;
        }
        li {
            margin-bottom: 5px;
        }
        .signature {
            font-style: italic;
            font-size: 14px;
        }
      </style>
</head>
<body>
    <div class="email-container">

        <p>Md. Moinul Hossain Nibir digital</p>
        <ul>
            <li><strong>Name:</strong> ${data.name}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Phone:</strong> ${data.phoneNumber}</li>
            <li><strong>Subject:</strong> ${data.subject}</li>
            <li><strong>Message:</strong><br>${data.message}</li>
        </ul>
    </div>

</body>
</html>
            `
        })
        if(info.messageId){
            return NextResponse.json({error:false, message: "Message Successfully sent! Thank you for contacting Md. Moinul Hossain Nibir"})
        }
        return NextResponse.json({error:true, message: "Something Went Wrong!"})
    }catch(e){
        console.log(e)
        return NextResponse.json({error:true, message: "Something Went Wrong!"})
    }
}