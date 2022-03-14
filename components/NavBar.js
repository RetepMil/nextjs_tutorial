import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./NavBar.module.css";

function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }

        a {
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}

export default NavBar;
