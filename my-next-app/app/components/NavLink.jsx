"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function Navlink({ href, children }) {
  const segment = useSelectedLayoutSegments();
  const active = href === `/${segment}`;
  return (
    <Link
      className={
        active
          ? "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          : "px-3 py-2 rounded-md text-sm font-medium text-gray-100 hover:text-white hover:bg-gray-500 focus:outline-none"
      }
      href={href}
    >
      <div className="flex h-full w-full items-center justify-center flex-col">
        {children}
      </div>
    </Link>
  );
}
