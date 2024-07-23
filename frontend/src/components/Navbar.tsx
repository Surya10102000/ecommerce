
import { useState } from "react";

const HamburgerMenu = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const Cancel = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

const Cart = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <>
    <nav className="lg:container mx-auto h-12 flex items-center justify-between ">
      <div className="p-2">
        <button className="lg:hidden">{isOpen ? Cancel : HamburgerMenu}</button>
        <ul className="hidden lg:flex lg:justify-around gap-8">
          <li>category</li>
          <li>Brands</li>
          <li>Shop</li>
        </ul>
      </div>

      <div className="text-2xl font-bold">H<span className="text-red-600">oo</span>d</div>

      <div className="p-2"><button>{Cart}</button></div>
    </nav>
    
    </>
  );
};
export default Navbar;
