import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <div className="bg-custom-blue p-10 text-white">
      <div className="md:px-10 md:flex  ">
        <div className="flex-1  ">
          <ol>
            <li className="font-Poppins font-bold">Gallery</li>
            <li className="mt-3 font-Poppins">Community</li>
            <li className="mt-3 font-Poppins">Trending</li>
            <li className="mt-3 font-Poppins">Picks</li>
          </ol>
        </div>
        <div className="flex-1 ">
          <ol>
            <li className="font-Poppins font-bold">Market Place</li>
            <li className="mt-3 font-Poppins">Trending</li>
            <li className="mt-3 font-Poppins">Best selling</li>
            <li className="mt-3 font-Poppins">Latest</li>
          </ol>
        </div>
        <div className="flex-1  ">
          <ol>
            <li className="font-Poppins font-bold">Magazine</li>
            <li className="mt-3 font-Poppins">Art SKills</li>
            <li className="mt-3 font-Poppins">Career</li>
            <li className="mt-3 font-Poppins">Inspiration</li>

            <li className="mt-3">News</li>
          </ol>
        </div>
        <div className="flex-1   justify-center flex flex-col">
          <p className="mb-2 font-Poppins">Subscribe to our email newsletter</p>
          <div className="flex items-center max-w-lg mx-auto ">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
              <Input className="py-6" />
            </div>

            <Button className="inline-flex items-center py-6 bg-gray-300 text-gray-900   px-3 ms-2 font-semibold">
              {" "}
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
