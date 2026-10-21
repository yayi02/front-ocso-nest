import Link from "next/link";
import { MdDashboard } from "react-icons/md";

const links = [{ href: "/dashboard", label: "Inicio", icon: MdDashboard }];

export default function Sidebar() {
  return (
    <aside className="flex w-56 flex-col gap-1 bg-orange-600 p-4 text-white">
      {links.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-orange-500"
        >
          <Icon size={20} />
          {label}
        </Link>
      ))}
    </aside>
  );
}
