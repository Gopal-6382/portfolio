// ContactForm.jsx
import { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import "../Sass/Contact.scss";
import PudgyWork from "../assets/Contact/Pudgy work (1)";

const ContactForm = () => {
  const lottieRef = useRef();
  const typingTimeout = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  useEffect(() => {
    // On mount, show first frame immediately
    const waitForLottie = setInterval(() => {
      if (lottieRef.current && lottieRef.current.goToAndStop) {
        requestAnimationFrame(() => {
          lottieRef.current.goToAndStop(0, true);
        });
        clearInterval(waitForLottie);
      }
    }, 50);
    return () => clearInterval(waitForLottie);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Play short animation segment when typing
    if (lottieRef.current) {
      lottieRef.current.playSegments([0, 30], true);
    }

    // Reset the typing timeout
    if (typingTimeout.current) clearTimeout(typingTimeout.current);

    typingTimeout.current = setTimeout(() => {
      // Stop on a visible frame with no flicker
      if (lottieRef.current) {
        requestAnimationFrame(() => {
          lottieRef.current.goToAndStop(10, true);
        });
      }
    }, 1000); // Stop 1s after typing stops
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    return name.trim() && email.includes("@") && message.trim();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      await emailjs.send(
        "service_ztswfqa",
        "template_q9ipjx6",
        formData,
        "0uDhO8yjZ3SXmnRsm"
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
    }
  };

  return (
    <section id="section-6" className="contact-form-section">
      <div className="container">
        <div className="row px-5 mb-5">
          <div className="col-12 contact  col-md-6 form">
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject (Optional)"
                value={formData.subject}
                onChange={handleChange}
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name (Optional)"
                value={formData.company}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message *"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="success-msg">✅ Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="error-msg">
                  ❌ Please fill in all required fields correctly.
                </p>
              )}
            </form>
          </div>

          <div className="col-12 pug mb-lg-5 col-md-6">
            <div className="lottie mb-lg-5 ">
              <Lottie
                lottieRef={lottieRef}
                animationData={PudgyWork}
                autoplay={false}
                loop={false}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
