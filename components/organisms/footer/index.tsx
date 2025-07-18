"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F402D] text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="/images/logo-white.png"
              alt="TMD Energy Logo"
              width={800}
              height={610}
              priority
              className="w-48"
            />
         
          </div>
          <p className="text-sm font-light text-white max-w-xs mb-4 font-kumbh">
            Discover the essence of sustainability with TMDBioGreen. Join us in
            our mission to create a greener future.
          </p>
          <div className="flex space-x-4">
            <Link href="#">
              <Facebook size={20} />
            </Link>
            <Link href="#">
              <Youtube size={20} />
            </Link>
            <Link href="#">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm  font-kumbh">
            <li>
              <Link href="/" className="hover:text-green-400">
                → &nbsp; Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-400">
                → &nbsp; About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-green-400">
                → &nbsp; Solutions & Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-medium mb-4">Newsletter</h3>
          <p className="text-sm text-[#74787C] mb-4 font-kumbh">
            Stay updated with the latest news and insights. Subscribe to our
            newsletter for exclusive content!
          </p>
          <form className="flex flex-col space-y-3 ">
            <input
              type="email"
              placeholder="Your email address"
              className="px-3 py-2 rounded-md text-black focus:outline-none font-kumbh"
            />
            <button
              type="submit"
              className="bg-green-500 text-white text-sm py-2 rounded-md hover:bg-green-600 transition"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-green-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © Copyright 2024 by{" "}
        <Link href="/" className="text-green-400 hover:underline">
          TMDBioGreen
        </Link>
        . All rights reserved.
      </div>
    </footer>
  );
}
