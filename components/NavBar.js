import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about/">
        <a>About</a>
      </Link>
    </nav>
  );
}

export default NavBar;
