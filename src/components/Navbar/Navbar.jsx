import { list } from "postcss";
import Link from "./Link/Link";
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Not Found', path: '*' },
      ];

    return (
       <nav>
        <div className="block md:hidden bg-yellow-300 p-3" onClick={() => setOpen(!open)}>
    {
        open === true ? <IoMdClose className="text-3xl" /> : <CiMenuBurger className="text-3xl" />
    }
</div>
        <ul className={`md:flex absolute duration-1000 bg-yellow-200 px-3
            ${open ? 'top-14' : '-top-48'}
            md:static`}>
        {
            routes.map(route => <Link key={route.path} 
                route={route} ></Link>)
        }
        </ul>
       </nav>
    );
};

export default Navbar;