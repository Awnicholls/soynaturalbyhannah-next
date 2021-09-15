import Image from 'next/image';
import Thanks from "../svg/thanks.svg"
function Success({ has }) {
  return (
    <div className="h-full lg:flex lg:flex-col lg:space-x-12">
      <div>
        <h1 className="pt-10 font-serif font-medium px-2 italic text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
          Thanks!
        </h1>
        <p className="mt-3 px-2 text-lg md:text-xl font-sans">
          You’ll receive an email with your receipt, and tracking information.
        </p>
      </div>
      <div className="lg:flex lg:items-center pr-44 lg:self-end lg:justify-center">
        <div className="bg-gray-100 shadow-thank-you transform -rotate-25 skew-y-12 mx-auto my-10 lg:mt-10 max-w-lg">
          <div className="ml-4 flex justify-start py-5">
            <Image
              src="/logo.png"
              width={175} height={175}
              alt="Soynatural doesn't exist here!"
            />
          </div>

          <div className="p-4 pt-0 -mt-4 leading-tight font-sans">
            <p>...isn&apos;t actually avaible here, but if you saw something you liked, you can head over to <a href="https://www.etsy.com/uk/shop/SoyNaturalByHannah" target="_blank" rel="noopener noreferrer nofollow" className="font-serif italic underline">etsy.com/uk/shop/SoyNaturalByHannah</a> to get it!</p>
            <div className="mt-6 mb-1 font-serif flex justify-between items-end">
              <Image
                src={Thanks}
                width={110}
                height={48}
                alt="Thanks for visiting"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
