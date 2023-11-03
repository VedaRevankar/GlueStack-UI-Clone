"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

const SidebarMenu: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex gap-4 px-5 py-3 active:rounded-md active:bg-primary-100 active:text-primary-900 hover:rounded-md hover:bg-primary-100 hover:text-primary-900">
        <Icon icon="ic:round-home" width={20} height={20} />
        <Link href="/home">Home</Link>
      </div>
      <div className="flex gap-4 px-5 py-3 active:rounded-md active:bg-primary-100 active:text-primary-900 hover:rounded-md hover:bg-primary-100 hover:text-primary-900">
        <Icon icon="bxs:book-open" width={20} height={20} />
        <Link href="/syllabus">Syllabus</Link>
      </div>
      <div className="flex gap-4 px-5 py-3 active:rounded-md active:bg-primary-100 active:text-primary-900 hover:rounded-md hover:bg-primary-100 hover:text-primary-900">
        <Icon icon="ic:twotone-speed" width={20} height={20} />
        <Link href="/test">Test</Link>
      </div>
      <div className="flex gap-4 px-5 py-3 active:rounded-md active:bg-primary-100 active:text-primary-900 hover:rounded-md hover:bg-primary-100 hover:text-primary-900">
        <Icon icon="material-symbols:subscriptions" width={20} height={20} />
        <Link href="/subscribe">Subscribe</Link>
      </div>
    </div>
  );
};

export default SidebarMenu;
