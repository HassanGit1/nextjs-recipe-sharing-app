'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({href, children}) {
    const path = usePathname();
    return(
        <Link href={href} 
        className={`text-gray-800 font-bold py-2 px-4 rounded-lg hover:text-red-600 
        ${path.startsWith(href) ? 'text-red-600' : 'text-gray-800'}`}>
         {children}
         </Link>
    )
}