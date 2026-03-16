"use client";

import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchat, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

const footerData = [
  {
    heading: "Links",
    items: [
      { label: "Support", href: "https://wa.me/918951639214 " },
      { label: "Terms of Use", href: "https://www.deltainstitutions.com/termsandcondition" },
      { label: "Privacy Policy", href: "https://www.deltainstitutions.com/privacy-policy" },
    ],
  },
  {
    heading: "Sitemap",
    items: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Contact",
    items: [
      {
        label: (
          <>
            {/* +91 7736859513 */}
            {/* <br />  */}
            Delta Trading Academy, 1st Floor, Work Hub by Novel Office, DODDANAKUNDI INDUSTRIAL AREA, Graphite India Main Rd, Whitefield, KEB Colony, Industrial Area, Mahadevapura, Bengaluru, Karnataka 560048
          </>
        ),
        href: "",
        target: "_blank",
        rel: "nofollow noopener",
      },
      {
        label: "info@deltainstitutions.com",
        href: "mailto:info@deltainstitutions.com",
      },
      {
        label: "+919187236407 ",
        href: "tel:+919187236407 ",
      },
    ],
    social: [
      {
        icon: <FaLinkedin />,
        href: 'https://www.linkedin.com/company/delta-international-academy/mycompany/?viewAsMember=true',
      },
      {
        icon: <FaFacebook />,
        href: 'https://www.facebook.com/profile.php?id=100092268086708',
      },
      {
        icon: <FaInstagram />,
        href: 'https://instagram.com/delta_international_institute?igshid=YmMyMTA2M2Y=',
      },
      {
        icon: <FaXTwitter />,
        href: 'https://x.com/DeltaI17228',
      },
      // {
      //   icon: <FaSnapchat/>,
      //   href: ' https://www.snapchat.com/add/deltamens1?share_id=lbwxHFqwycE&locale=en-GB',
      // },
      {
        icon: <FaYoutube />,
        href: 'https://www.youtube.com/channel/UCrxRRxzEy84uX-MZqxFSy2g',
      },
      // {
      //   icon: <FaTiktok/>,
      //   href: 'https://www.tiktok.com/@deltainstitute?_r=1&_t=ZS-910aLwB4FHT',
      // },

    ]
  },
];

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <footer id="tt-footer" className="border-top">
      <div className="tt-footer-inner tt-wrap">
        <div className="tt-row">
          {footerData.map((section, index) => (
            <div key={index} className="tt-col-xl-3 tt-col-sm-6">
              <div className="tt-footer-widget">
                <h5 className="tt-footer-widget-heading">{section.heading}</h5>
                <ul className="tt-footer-widget-list">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.href}
                        className="tt-link"
                        target={"_self"}
                        rel={""}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                  {section.social && (
                    <li>
                      <div className="tt-social-buttons">
                        <ul>
                          {section.social.map((socialItem, i) => (
                            <li key={i}>
                              <a
                                href={socialItem.href}
                                className="tt-magnetic-item"
                              >
                                {socialItem.icon}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}

          {/* Logo & Copyright */}
          <div className="tt-col-xl-3 tt-col-sm-6 tt-justify-content-xl-end">
            <div className="tt-footer-widget">
              <ul className="tt-footer-widget-list">
                <li>
                  <div style={{ pointerEvents: 'none' }} className="tt-footer-logo">
                    <a href="/">
                      <img
                        src="/logos-pdf.png"
                        // style={{ scale: 2.5 ,filter:"grayscale(100%) brightness(10)"}}
                        className="tt-logo-light"
                        loading="lazy"
                        alt="Logo"
                      />
                      <img
                        src="/logos-pdf.png"
                        className="tt-logo-dark"
                        loading="lazy"
                        // style={{ filter:"brightness(.1)"}}
                        alt="Logo"
                      />
                    </a>
                  </div>
                </li>
                <li>
                  {/* <div className="tt-footer-copyright md:ml-5">
                   
                    <a
                      href="www.eleganttradingacademy.com"
                      className="tt-link"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      eleganttradingacademy.com
                    </a>
                    <br />
                    Elegant Trading Academy   © {new Date().getFullYear()}{" "}  All Rights Reserved
                  </div> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
