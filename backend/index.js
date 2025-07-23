const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shazgitit@gmail.com",      
      pass: "xumc xajx gvcd zfct"           
    }
  });
  const mailOptions = {
    from: "shazgitit@gmail.com",        
    to: "shazgitit@gmail.com",          
    replyTo: email,                       
    subject: `Message from ${name}`,
    text: message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email send failed:", error);
      return res.status(500).json({ success: false, message: "Email failed to send." });
    } else {
      console.log("Email sent successfully:", info.response);
      return res.status(200).json({ success: true, message: "Email sent!" });
    }
  });
});
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
