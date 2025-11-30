"use client";
import NavBar from "../components/NavBar";
import NewFooter from "../components/NewFooter";
import "./services.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ServicesPage() {

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=1")) {
      setSuccess(true);
    }
  }, []);
  return (
    <>
      <NavBar />

      <div className="menuContact">
        <div className="animated-grid"></div>
        <div className="animated-circle"></div>
        <div className="body">
          <div className="head">
            <div className="left">
              <p>Contact form</p>
              <p>
                Every good partnership starts with coffee.
                <br /> Now lets make an appointment.
              </p>
            </div>
            <div className="right">
              <Link className="link" href="mailto:contact@scaledsolutions.com.au">
                Email
              </Link>
              <Link className="link" href="mailto:contact@scaledsolutions.com.au">
                contact@scaledsolutions.com.au
              </Link>
              <Link className="link" href="tel:18193453223">
                819-345-3223
              </Link>
            </div>
          </div>

          {success && (
            <p className="success">
              ✅ Thank you! We received your message.
            </p>
          )}

          <form className="form"
            method="POST"
            action="https://formsubmit.co/Admin@scaledsolutions.com.au"
          >
            <div className="top">
              <div className="left">
                <input type="text" id="first-name" name="firstname" placeholder="First name*" required autoComplete="given-name" />
                <input type="email" id="email" name="email" placeholder="E-mail*" required autoComplete="email" />
                <input type="text" id="company" name="company" placeholder="Company" autoComplete="organization" />
              </div>

              <div className="right">
                <input type="text" id="last-name" name="lastname" placeholder="Last name*" required autoComplete="family-name" />
                <input type="text" id="looking-for" name="help" placeholder="I am looking for help for *" required autoComplete="off" />
              </div>
            </div>

            <input type="text" id="message" name="message" placeholder="Message*" autoComplete="off" required />

            <input type="hidden" name="_next" value="http://scaledsolutions.vercel.app/contact?success=1" />

            <input type="hidden" name="_captcha" value="false" />

            <button className="btn">Send</button>
          </form>

        </div>
      </div>

      <NewFooter />
    </>
  );
}
