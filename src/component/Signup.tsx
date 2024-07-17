import { useFormik } from "formik";
import SignupSchema from "../validations/userValidation";
import { Signup } from "../interface/user";
import { userApi } from "../API/userApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const { errors, touched, handleBlur, handleChange, handleSubmit } = useFormik(
    {
      initialValues: {
        name: "",
        email: "",

        password: "",
        confirmPassword: "",
      },
      validationSchema: SignupSchema,
      onSubmit: async (data: Signup) => {
         console.log(data,"daaa");
         
        userApi
          .register(data)
          .then((res) => {
            if (res.data.status) {
              navigate("/login");
              toast(res.data.message);
            }
          })
          .catch((err) => {
            if (!err.response.data.status) {
              toast.error(err.response.data.message);
            }
          });
      },
    }
  );
  console.log(errors, "errr");
  return (
    <>
      <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-white shadow-md rounded-md p-6">
            <img
              className="mx-auto h-12 w-auto"
              src="https://www.svgrepo.com/show/499664/user-happy.svg"
              alt=""
            />

            <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="name"
                    type="text"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                  {errors.name && touched.name && (
                    <p className="text-red-500">{errors.name}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="email"
                    type="email-address"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    onBlur={handleBlur}
                    id="password"
                    onChange={handleChange}
                    name="password"
                    type="password"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                  {errors.password && touched.password && (
                    <p className="text-red-500">{errors.password}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="confirmPassword"
                    id="confirmPassword"
                    type="password"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <p className="text-red-500">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  Register Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
