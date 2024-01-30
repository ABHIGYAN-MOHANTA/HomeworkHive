import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar fixed top-0 left-0 w-full bg-gray-900 text-white z-50 font-sans">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Homework Hive
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/services" passHref>
              <p className="hover:text-gray-400">Services</p>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <p className="hover:text-gray-400">About</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
