import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="py-5 bg-[#eee] flex justify-around items-center">
      <Link to='/' className="text-[18px]">Logo</Link>
      <ul className="flex items-center gap-5">
        <li>
          <Link to='/' className="">Home</Link>
        </li>
        <li>
          <Link to='products' className="">Products</Link>
        </li>
        <li>
          <Link to='categories' className="">Categories</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;