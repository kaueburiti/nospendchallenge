import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  FiDribbble,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiShoppingCart,
  FiTwitter,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-800 dark:bg-gray-900">
      <div className="container">
        <div className="grid md:grid-cols-12 items-center">
          <div className="text-center md:text-left md:col-span-3">
            <p className="text-white font-extrabold">
              #<span className="text-red-400">NoSpend</span>Challenge
            </p>
          </div>

          <div className="md:col-span-5 md:mt-0 mt-8">
            <div className="text-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Built with{" "}
                <i className="mdi mdi-heart text-red-700"></i> by <b>Buritis</b>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
