import { useEffect, useState } from "react";
import isLoggedIn from "../Auth/isLoggedIn";
import Navbar from "../component/Navbar";
import { Posts } from "../interface/user";
import { useParams } from "react-router-dom";
import { userApi } from "../API/userApi";
import moment from "moment";
const ArticlePage: React.FC = () => {
  function formate(date:Date){
     return moment(date).format('YYYY-MM-DD');
  };
  const { id } = useParams();
  const [details, setDetails] = useState<Posts>();
  useEffect(() => {
    userApi.fetchSpecificPost(id as string).then((res) => {
      setDetails(res.data.post);
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-8  ">
          {/* Post Header */}
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {details?.title}
            </h1>
            <p className="text-gray-600">
              Published on {formate(details?.createdAt as Date)}
            </p>
          </div>

          {/* Post Image */}
          <img
            className="w-full h-auto rounded-lg mb-6"
            src={details?.image as string}
            alt="Blog Post Image"
          />

          {/* Post Content */}
          <div className="prose prose-lg mb-8">
            <p className="text-base-100">{details?.description}</p>

            {/* Add more content as needed */}
          </div>

          {/* Author Section */}
          <div className="border-t border-gray-200 pt-4 mb-8">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={
                  details?.user.image
                    ? details.user.image
                    : "https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
                }
                alt="Author"
              />
              <div>
                <p className="text-gray-900 font-medium">
                  {details?.user.name}
                </p>
                <p className="text-gray-600">{details?.user.about}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default isLoggedIn(ArticlePage);
