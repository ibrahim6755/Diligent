import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center">
      <div>
        <Image src="/images/logo.png" alt="" width={140} height={40} />
      </div>
      <div className="me-14 uppercase">
        <ul className="flex items-center justify-center">
          <li className="mx-3 font-bold text-md font-sans">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-3 font-bold text-md font-sans">
            <Link href="/">About</Link>
          </li>
          <li className="mx-3 font-bold text-md font-sans">
            <Link href="/">Blog</Link>
          </li>
          <li className="mx-3 font-bold text-md font-sans">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
