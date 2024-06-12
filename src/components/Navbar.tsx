import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">BLOG</Link>
      <Link href="/about">About</Link>
      <Link href="/portfolio">포토폴리오</Link>
      <Link href="/project">프로젝트</Link>
      <Link href="/contact">연락처</Link>
    </nav>
  );
}
