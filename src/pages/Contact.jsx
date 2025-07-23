import './Contact.css';

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

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        e.target.reset(); // Clear the form
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      alert("Server error. Please try again later.");
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
