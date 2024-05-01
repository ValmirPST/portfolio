import React from "react";

function ContactMe() {
  return (
    <section className="contact-me" id="contact">
      <div className="secondary-title">
        <p>contact me.</p>
        <hr />
      </div>

      <form action="" method="" className="contact-form">
        <input
          id="name-input"
          className="text-field"
          type="text"
          placeholder="Enter your full name"
        />
        <input
          id="email-input"
          className="text-field"
          type="text"
          placeholder="Enter your email"
        />
        <textarea
          id="message-textarea"
          className="text-field"
          type="text"
          rows={6}
          cols={40}
          placeholder="Enter your essage"
        />

        <button id="contact-button" type="submit">
          SUBMIT
        </button>
      </form>
    </section>
  );
}

export default ContactMe;
