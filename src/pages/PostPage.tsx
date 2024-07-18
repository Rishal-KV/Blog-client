import Navbar from "../component/Navbar";
import Post from "../component/Post";
import AddPost from "../component/AddPost";
import { useEffect, useState } from "react";
import { userApi } from "../API/userApi";
import { Posts } from "../interface/user";
import isLoggedIn from "../Auth/isLoggedIn";
const PostPage: React.FC = () => {
  const [post, setPost] = useState<Posts[]>([]);
  useEffect(() => {
    userApi.fetchPost().then((res) => {
      setPost(res.data.post);
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-3 bg-white min-h-screen">
        {post?.map((postData: Posts) => (
          <Post Posts={postData} />
        ))}

        <AddPost setPost={setPost} />
      </div>
    </>
  );
};

export default isLoggedIn(PostPage);
