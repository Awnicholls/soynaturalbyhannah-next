import CartSummary from "./CartSummary";
import Link from "next/link";
import Image from "next/image"

const Nav = () => {
  return (
    <div className="fixed z-20 top-0 w-full px-4 py-5 mx-auto bg-white sm:max-w-xl md:max-w-full md:px-24 lg:px-8 drop-shadow-xl">
      <div className="relative flex items-center justify-between">
        <Link href="/" passHref>
          <a
            aria-label="Soynatural"
            title="SoyNatural by Hannah"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-lg lg:text-xl font-bold tracking-wide text-gray-800 border-double border-4 border-purple bg-white hover:bg-blue-200 ">
              SoyNatural by <span className="text-purple">Hannah</span>
            </span>
          </a>
        </Link>
        <div className="absolute -z-1 flex-1 w-full md:flex hidden justify-center">
        <Image src="/logo.png" width={75} height={75} alt="Soy Natural by Hannah logo"/>
        </div>
        <ul className="flex items-center space-x-2">
          <li>
            <Link href="/products" passHref>
              <a
                className="text-lg transition-colors duration-200 hover:text-purple"
                aria-label="Our products"
                title="Our products"
              >
                Products
              </a>
            </Link>
          </li>
          <li>
            <CartSummary />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
