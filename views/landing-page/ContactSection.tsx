import Link from "next/link";
import React from "react";

const NAV_ITEMS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Products",
    href: "/#products",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 text-center lg:grid-cols-4 lg:space-x-4">
          <div className="hidden lg:block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.02827846878!2d72.81823977510864!3d21.151272880528904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0510471d660d9%3A0x378f1fbc5fd1276d!2sGorana%20Facade%20solutions!5e0!3m2!1sen!2sin!4v1736197537843!5m2!1sen!2sin"
              className="h-80 w-full border-none focus:outline-none"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mb-10 lg:mb-0">
            <h3 className="mb-4 text-lg font-semibold uppercase">
              Quick Links
            </h3>
            <div className="flex flex-col items-center space-y-3">
              {NAV_ITEMS.map((nav, idx) => {
                const { title, href } = nav;
                return (
                  <Link key={idx} href={href} className="w-fit">
                    {title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="mb-10 lg:mb-0">
            <h3 className="mb-4 text-lg font-semibold uppercase">Contact Us</h3>
            <div>
              <span>Email: </span>
              <Link href={"mailto:gorana2010@gmail.com"}>
                gorana2010@gmail.com
              </Link>
            </div>
            <div>
              <span>Phone: </span>
              <Link href={"tel:+919824168203"}>+91 98241-68203</Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold uppercase">Address</h3>
            <Link
              href={"https://maps.app.goo.gl/WqgRXTeCkHyiWvHb9"}
              target="_blank"
            >
              72 & 73 Shiv Nagar, Bamroli Rd, Nazami Mohalla, Gopal Nagar
              Society, Pandesara, Udhana, Surat, Gujarat - 394220
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
