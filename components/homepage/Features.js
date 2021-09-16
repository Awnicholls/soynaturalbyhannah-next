import Image from "next/image";
import { EcoTwoTone } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
const Features = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-center text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative ">About Us</span>
          </span>
        </h2>
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col text-center justify-between p-5 border rounded shadow-md">
          <div>
            <div className="flex flex-1 justify-center">
              <div className="flex  text-center items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <EcoTwoTone style={{ color: green[500], fontSize: 50 }} />
              </div>
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-green-500">Eco<span className="text-black">-Friendly</span></h6>
            <p className="mb-3 text-sm text-gray-900">
              All our packaging is entirely eco-friendly and designed to protect
              the planet!
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center  text-center p-5 border rounded shadow-md">
          <div>
            <div className="flex flex-1 justify-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <Image
                  src="/handmade.png"
                  alt="handmade icon"
                  height={50}
                  width={50}
                />
              </div>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Handmade</h6>
            <p className="mb-3 text-sm text-gray-900">
              All our candles and melts are hand-poured using 100% natural soy
              wax, which is vegan and biodegradable!
            </p>
          </div>
        </div>
        <div className="flex flex-col  text-center justify-between p-5 border rounded shadow-md">
          <div>
            <div className="flex flex-1 justify-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <Image src="/ukicon.png" alt="UK icon" height={50} width={50} />
              </div>
            </div>
            <h6 className="mb-2 font-semibold leading-5"> Made In the U.K.</h6>
            <p className="mb-3 text-sm text-gray-900">
              All of our products and materials are locally sourced as well as
              being made and packed locally!
            </p>
          </div>
        </div>
        <div className="flex flex-col  text-center justify-between p-5 border rounded shadow-md">
          <div>
            {" "}
            <div className="flex flex-1 justify-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <Image
                  src="/giftbox.png"
                  alt="giftbox icon"
                  height={50}
                  width={50}
                />
              </div>
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Gift options avaiable{" "}
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Orders are packed on demand, so gift options and notes are
              avaible! Just add them to the note section on checkout!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
