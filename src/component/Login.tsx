import { useFormik } from "formik";
import { loginValidation } from "../validations/userValidation";
import { LoginData } from "../interface/user";
import { userApi } from "../API/userApi";
import { toast } from "sonner";
import { userAuth } from "../Redux/slice";
import { useNavigate } from "react-router-dom";
import isLoggedOut from "../Auth/isLoggedOut";

import { useDispatch } from "react-redux";
const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: (logindata: LoginData) => {
     

      userApi
        .login(logindata)
        .then((res) => {
          if (res.data.status) {
            console.log(res.data, "ress");
            console.log(res.data.userData);
            dispatch(
              userAuth({
                user: res.data.userData,
              })
            );

            localStorage.setItem("userToken", res.data.token);
            navigate("/");
          }
        })
        .catch((err) => {
          if (!err.response.data.status) {
            toast.error(err.response.data.message);
          }
        });
    },
  });

  return (
    <>
      <div
        className="bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://picsum.photos/1920/1080')",
          height: "100vh",
        }}
      >
        <div className="h-screen flex justify-center items-center">
          <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
            <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block font-semibold text-gray-700 mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                onBlur={handleBlur}
                  onChange={handleChange}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                />
                {errors.email && touched.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <label
                  className="block font-semibold text-gray-700 mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                onBlur={handleBlur}
                  onChange={handleChange}
                  className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
                  {errors.password && touched.password && <p className="text-red-500">{errors.password}</p>}
              </div>
              <div className="mb-6">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default isLoggedOut(Login);
