import React from "react";
import { Button } from "./ui/button";
const NavBar: React.FC = () => {
  return (
    <div className=" w-full h-14 flex items-center px-10 ">
      <div className="flex justify-between  w-full">
        <div>
          <h1>Redify</h1>
        </div>
        <div className="flex  items-center">
          <ol className="flex gap-10 mr-7">
            <li>Home</li>
            <li>Blog</li>
            <li>Creators</li>
            <li>Community</li>
          
          </ol>
          <Button className="bg-blue-500">Login</Button>
          <Button className="ml-2 bg-blue-500">Sign Up</Button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
