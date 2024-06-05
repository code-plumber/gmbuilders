import nodemailer from "nodemailer"

export default async function ContactAPI (req, resp) {
    const (name, email, message) = req.body

    const data = {
        name, email, mseeage
    }

    return resp.status(200).json({message: "success"})
}