import React from "react";
import { Button } from "../components/ui/button";
import Layout from "../Layout/Layout";

import BoxReveal from "../components/magicui/box-reveal";
const LandPage: React.FC = () => {
  return (
    <Layout>
      <div className="px-10 py-16">
        <div>
          <BoxReveal duration={0.5}>
            <h1 className="text-3xl font-extrabold">
              Uncover fresh perspectives,ideas,and{" "}
            </h1>
          </BoxReveal>
          <BoxReveal duration={0.5}>
            <h1 className="text-3xl font-extrabold">
              Knowledge through the power of Blogs.
            </h1>
          </BoxReveal>
          <div className="mt-3">
            <BoxReveal duration={0.5}>
              <p>
                Redify is an open platform where readers find dynamic thinking
                and where
              </p>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <p>
                Experts and undiscovred voices can share their writing on any
                topic.
              </p>
            </BoxReveal>
          </div>
          <BoxReveal duration={0.5}>
            <Button className="font-bold mt-3 bg-blue-500">
              Start Reading
            </Button>
          </BoxReveal>
        </div>
      </div>

      <div className=" md:flex gap-2 px-10 py-10">
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="flex-1 gap-2 flex flex-col ">
          <div className="flex-1  flex  gap-3  border border-gray-300  overflow-hidden items-center justify-start">
            <div className="relative w-32 h-32 flex-shrink-0">
              <img
                className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                loading="lazy"
                src="https://via.placeholder.com/150"
              />
            </div>

            <div className="flex flex-col gap-2 py-2">
              <p className="text-xl font-bold">Post title</p>

              <p className="text-gray-500">
                Description of your post/article, Description of your
                post/article,
              </p>

              <span className="flex items-center justify-start text-gray-500">
                <svg
                  className="w-4 h-4 mr-1 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <a href="amitpachange.com" target="_blank">
                  amitpachange.com
                </a>
              </span>
            </div>
          </div>
          <div className="flex-1  flex  gap-3  border border-gray-300  overflow-hidden items-center justify-start">
            <div className="relative w-32 h-32 flex-shrink-0">
              <img
                className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                loading="lazy"
                src="https://via.placeholder.com/150"
              />
            </div>

            <div className="flex flex-col gap-2 py-2">
              <p className="text-xl font-bold">Post title</p>

              <p className="text-gray-500">
                Description of your post/article, Description of your
                post/article,
              </p>

              <span className="flex items-center justify-start text-gray-500">
                <svg
                  className="w-4 h-4 mr-1 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <a href="amitpachange.com" target="_blank">
                  amitpachange.com
                </a>
              </span>
            </div>
          </div>
          <div className="flex-1  flex  gap-3  border border-gray-300  overflow-hidden items-center justify-start">
            <div className="relative w-32 h-32 flex-shrink-0">
              <img
                className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                loading="lazy"
                src="https://via.placeholder.com/150"
              />
            </div>

            <div className="flex flex-col gap-2 py-2">
              <p className="text-xl font-bold">Post title</p>

              <p className="text-gray-500">
                Description of your post/article, Description of your
                post/article,
              </p>

              <span className="flex items-center justify-start text-gray-500">
                <svg
                  className="w-4 h-4 mr-1 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <a href="amitpachange.com" target="_blank">
                  amitpachange.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default LandPage;
