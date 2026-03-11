// controllers/contactController.js
const nodemailer = require('nodemailer');

exports.sendInquiry = async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Fashion Inquiry from ${name}`,
    text: `Message from ${email}: \n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};