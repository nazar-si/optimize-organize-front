import { NextApiRequest, NextApiResponse } from "next"
import { redirect } from "next/navigation";

interface RegistrationRequest extends NextApiRequest {
    body: {
        email: string,
        password: string
    };
}

export default function handler(req: RegistrationRequest, res: NextApiResponse) {
    if(req.method !== "POST") {
        res.status(405).send("Method Not Allowed");
        return;
    }
    const { email, password } = req.body;
    console.log('new user', email, password);
    redirect("/");
}