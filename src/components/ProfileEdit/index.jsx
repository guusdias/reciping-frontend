import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/User/index";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [formData, setFormData] = useState({
    user_name: user?.user_name || "",
    email: user?.email || "",
    password: "",
    user_img: user?.user_img || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      user_name: formData.user_name,
      email: formData.email,
      user_img: formData.user_img,
    };

    try {
      await api.updateUser(user._id, updatedUser);

      const updatedUserData = { ...user, ...updatedUser };
      sessionStorage.setItem("user", JSON.stringify(updatedUserData));

      navigate("/feed");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="flex flex-col mt-0 gap-10 items-center shadow-md p-10 rounded-3xl bg-slate-50 h-full w-full">
      <div className="flex flex-row">
        <div className="profile-edit flex items-center justify-center w-1/2">
          <div className="photo-input flex items-center justify-center mb-10">
            <img
              src={formData.user_img || "default-profile.png"}
              alt="profile photo"
              className="rounded-full w-62 h-62 object-cover"
            />
          </div>
        </div>

        <div className="form-profile flex flex-col w-1/2 items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 justify-center"
          >
            <div className="flex items-center">
              <label
                htmlFor="user_name"
                className="w-1/4 mr-2 text-sm font-medium"
              >
                Nome:
              </label>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                id="user_name"
                className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="email" className="w-1/4 mr-2 text-sm font-medium">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="items-center hidden">
              <label
                htmlFor="password"
                className="w-1/4 mr-2 text-sm font-medium"
              >
                Senha:
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                id="password"
                className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center">
              <label
                htmlFor="user_img"
                className="w-1/4 mr-2 text-sm font-medium"
              >
                URL da Foto:
              </label>
              <input
                type="text"
                name="user_img"
                value={formData.user_img}
                onChange={handleChange}
                id="user_img"
                className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Salvar Alterações
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
