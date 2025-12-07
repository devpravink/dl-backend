const Contact = require("../model/contact.model");
const nodemailer = require("nodemailer");

exports.createContact = async (req, res) => {
  try {
    const data = await Contact.create(req.body);

    // ✅ Correct transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.EMAIL_USER,  // match your .env
        pass: process.env.EMAIL_PASS,  // match your .env
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submitted",
      html: `
        <h3>New Contact Details</h3>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Mobile:</b> ${data.mobile}</p>
        <p><b>Description:</b> ${data.description}</p>
      `,
    });

    res.status(201).json({
      message: "Form submitted & email sent successfully",
      data,
    });

  } catch (err) {
    console.log("Contact API Error:", err);
    res.status(500).json({ message: "Error", error: err.message });
}
};
