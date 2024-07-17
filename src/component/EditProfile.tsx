import { useFormik } from "formik";
import isLoggedIn from "../Auth/isLoggedIn";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { ProfileType, User } from "../interface/user";
import { userApi } from "../API/userApi";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { userAuth } from "../Redux/slice";
import ProfileValidationSchema from "../validations/profile";
const EditProfile: React.FC = () => {
  const email = useSelector((state: User) => state.user?.user?.email);
  const [user, setUser] = useState<ProfileType>();

  const buttonRef = useRef<HTMLInputElement>(null);
  function selectImage() {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  }
  const dispatch = useDispatch();
  const [previewUrl, setPreviewUrl] = useState<string>();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setFieldValue("image", e.target.files[0]);
    }
  };

  useEffect(() => {
    userApi.fetchProfile(email).then((res) => {
      setUser(res.userFound);
    });
    setFieldValue("name", user?.name);
    setFieldValue("about", user?.about);
    setFieldValue("image", user?.image);
  }, [email]);
  const {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "" || user?.name,
      about: "" || user?.about,
      image: "" || user?.image,
    },
    validationSchema: ProfileValidationSchema,
    onSubmit: (formData) => {
      userApi.updateProfile(formData, email).then((res) => {
        toast.success("profile updated");

        setUser(res.userUpdated);
        dispatch(userAuth({ user: res.userUpdated }));
      });
    },
    enableReinitialize: true,
  });

  return (
    <>
    
      <Navbar />
      <div className="flex items-center justify-center">
        <main className="w-full min-h-screen  md:w-2/3 lg:w-3/4 flex justify-center">
          <form onSubmit={handleSubmit}>
            <div className="p-2 md:p-4">
              <div className="w-full mt-8 sm:max-w-xl sm:rounded-lg">
                <div className="grid max-w-2xl mx-auto mt-8">
                  <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                    <img
                      className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                      src={
                        previewUrl
                          ? previewUrl
                          : values.image
                          ? values.image
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd5avdba8EiOZH8lmV3XshrXx7dKRZvhx-A&s"
                      }
                      alt="Bordered avatar"
                    />

                    <div className="flex flex-col space-y-5 sm:ml-8">
                      <button
                        onClick={() => selectImage()}
                        type="button"
                        className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                      >
                        Change picture
                      </button>
                    </div>
                  </div>
                  <input
                    onChange={handleFileChange}
                    hidden
                    type="file"
                    ref={buttonRef}
                  />

                  <div className="items-center  sm:mt-14 text-[#202142]">
                    <div className="flex flex-col items-center w-full  space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                      <div className="w-full">
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                        >
                          Your first name
                        </label>
                        <input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          id="name"
                          className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                          placeholder="Your first name"
                          value={values.name}
                          required
                        />
                        {errors.name && touched.name && <p>{errors.name}</p>}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="about"
                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                      >
                        Bio
                      </label>
                      <textarea
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={user?.about}
                        id="about"
                        rows={4}
                        className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 "
                        placeholder="Write your bio here..."
                      ></textarea>
                      {errors.about && touched.about && <p>{errors.about}</p>}
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default isLoggedIn(EditProfile);
