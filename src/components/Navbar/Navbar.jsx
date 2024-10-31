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
        <div className="block md:hidden" onClick={() => setOpen(!open)}>
    {
        open === true ? <IoMdClose /> : <CiMenuBurger className="text-3xl" />
    }
</div>
        <ul className="md:flex items-center justify-center py-3">
        {
            routes.map(route => <Link key={route.path} 
                route={route} ></Link>)
        }
        </ul>
       </nav>
    );
};

export default Navbar;