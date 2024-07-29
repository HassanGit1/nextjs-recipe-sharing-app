
import Link from "next/link";
import logoImg from '@/assets/logo.png'
import Image from "next/image";
import NavLink from "../nav-link";

export default function MainHeader() {

    return <header className="flex justify-around items-center py-8 px-4">
        <Link href="/" 
        className="flex items-center justify-center 
        gap-8 text-gray-800 font-bold tracking-widest uppercase text-2xl">
          <Image src={logoImg} alt='Burger'
           className="w-20 h-20 object-contain backdrop-opacity-50" priority /> 
          Next Level Food
        </Link>
        <nav>
            <ul className="list-none m-0 p-0 flex gap-6 text-lg">
                <li>
                    <NavLink href="/meals">
                    Browse Meals
                    </NavLink>
                </li>
                <li>
                    <NavLink href="/community">
                    Foodies Community
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

