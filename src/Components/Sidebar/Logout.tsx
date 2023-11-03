"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Logout: React.FC = () => {
  return (
    <div className="flex gap-4 px-9 py-5 border-t border-gray-200 absolute bottom-0 left-0 right-0">
      <Icon icon="material-symbols:logout" width={20} height={20} />
      <Link href="/logout">
        <button className="">Logout</button>
      </Link>
    </div>
  );
};

export default Logout;
