import isLoggedIn from "../Auth/isLoggedIn";
import Navbar from "../component/Navbar";
import SavedCard from "../component/Saved";
import { userApi } from "../API/userApi";
import { Saved, User } from "../interface/user";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const SavedArticlePage: React.FC = () => {


    const userId = useSelector((state: User) => state.user?.user?._id);
    const [saved, setSaved] = useState<Saved>()
    useEffect(()=>{
      userApi.fetchSaved(userId).then((res)=>{
        setSaved(res.data.saved)
      })
    },[])
  return (
    <div>
      <Navbar />
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 bg-white min-h-screen">
        {
            
      saved?.posts.map((post:any)=>(
        <SavedCard post={post}/>
      ))
        }
      
      </ul>
    </div>
  );
};

export default isLoggedIn(SavedArticlePage);
