import './Contact.css';
import emailjs from '@emailjs/browser';

emailjs.init('YYcKJZ5xc0ylKiYZK');

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.msg.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }

    const templateParams = {
      name: name,
      email: email,
      message: message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        'service_03lye46',
        'template_2mt7nsl',
        templateParams
      );
      alert("Message sent successfully!");
      e.target.reset();
    } catch (err) {
      alert("Failed to send message. Try again!");
      console.error(err);
    }
  };

  return (
    <div className="con">
      <div className="title">
        <h2>Contact Me</h2>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" placeholder="Enter your name" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" placeholder="Enter your email" id="email" name="email" required />

          <label htmlFor="msg">Message:</label>
          <textarea rows="5" placeholder="Your message" id="msg" name="msg" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;