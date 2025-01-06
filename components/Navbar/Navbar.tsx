import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ITEMS = [
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

const Navbar = () => {
  const router = useRouter();

  return (
    <Disclosure as={"nav"}>
      <div className="flex items-center justify-between px-6 py-4 lg:px-16">
        <Link
          href={"/"}
          className="relative flex h-14 w-28 select-none lg:h-16 lg:w-32"
        >
          <Image src={"/brand-icon.png"} fill alt="brand-icon" />
        </Link>
        <div className="group hidden space-x-8 lg:block">
          {ITEMS.map((item, idx) => {
            const { title, href } = item;

            return (
              <Link
                key={idx}
                href={href}
                className={clsx(
                  router.pathname == href ? "text-blue-950" : "text-black",
                  "font-semibold uppercase hover:text-blue-950",
                )}
              >
                {title}
              </Link>
            );
          })}
        </div>
        <DisclosureButton className="group block focus:outline-none lg:hidden">
          <span className="sr-only">Open main menu</span>
          <Bars2Icon
            aria-hidden="true"
            className="block size-6 group-data-[open]:hidden"
          />
          <XMarkIcon
            aria-hidden="true"
            className="hidden size-6 group-data-[open]:block"
          />
        </DisclosureButton>
      </div>
      <DisclosurePanel className="absolute inset-x-0 top-[88px] z-20 block lg:hidden">
        <div className="space-y-1 bg-white px-2 pb-4 pt-2">
          {ITEMS.map((item, idx) => {
            const { title, href } = item;
            return (
              <DisclosureButton
                key={idx}
                as={Link}
                href={item.href}
                aria-current={router.pathname == href ? "page" : undefined}
                className={clsx(
                  router.pathname == href
                    ? "text-blue-950"
                    : "text-black hover:text-blue-950",
                  "block rounded-md px-3 py-2 text-base font-semibold uppercase",
                )}
              >
                {title}
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
