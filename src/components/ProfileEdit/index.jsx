import React, { useState, useRef } from "react";

const ProfileEdit = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      photo: null,
    });
  };

  return (
    <div className="container mx-auto max-w-2xl bg-white p-8 border-r-8 h-full w-full">
      <div className="flex flex-row">
        <div className="profile-edit flex items-center justify-center w-1/2">
          <div
            className="photo-input flex items-center justify-center cursor-pointer mb-10"
            onClick={handleImageClick}
          >
            <img
              src="https://github.com/Lucaswillians.png"
              alt="profile photo"
              className="rounded-full w-62 h-62 object-cover"
            />
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />
          </div>
        </div>

        <div className="form-profile flex flex-col w-1/2 items-center justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex items-center">
              <label htmlFor="name" className="w-1/4 mr-2 text-sm font-medium">
                Nome:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                id="name"
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
            <div className="flex items-center">
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
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
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
