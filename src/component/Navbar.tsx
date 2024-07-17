import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { User } from "../interface/user";
const Navbar: React.FC = () => {
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem('userToken')
        navigate('/login')
    }

    const userImage = useSelector((state: User) => state.user?.user?.image);
  return (
    <div className="navbar bg-white border-2 sticky top-0 z-50">
      <div className="flex-1">
        <p onClick={()=> navigate('/')} className="btn btn-ghost text-base-100 text-xl">Blog App</p>
      </div>
      <div className="flex-none gap-2">
        <div
          style={{ maxWidth: "240px" }}
          className="flex items-center justify-between rounded-full mx-auto bg-gradient-to-tr from-red-400 via-orange-400 to-rose-400 p-1 shadow-lg"
        >
          <button
            data-modal-target="crud-modal"
            data-modal-toggle="crud-modal"
            className="flex items-center justify-center font-bold text-xl bg-white px-6 py-1 rounded-full"
          >
            <span>Create a post</span>
            <img
              className="ml-2"
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/plus--v1.png"
              alt="plus--v1"
            />
          </button>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={userImage ? userImage : "https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <p onClick={()=> navigate('/profile')} className="justify-between">Profile</p>
            </li>
            <li>
              <p onClick={()=> navigate('/saved')}>Saved Post</p>
            </li>
            <li>
              <p onClick={logOut} >Logout</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
