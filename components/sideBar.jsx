import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { non_active, active, nav_links } from "./sidebar.module.css";

const Sidebar = () => {
  const router = useRouter();

  const menu = [
    { title: "Test", path: "/" },
    { title: "About", path: "/about" },
  ];

  return (
    <ul className={nav_links}>
      {menu.map((item, index) => {
        return (
          <li key={index}>
            <Link href={item.path}>
              <a
                className={router.pathname === item.path ? active : non_active}
              >
                {item.title}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
