// ProfileEdit.tsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/User";
import { User, FormData } from "../../types";
import ProfileForm from "../ProfileForm";
import ProfilePhoto from "../ProfilePhoto";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const user: User | null = JSON.parse(
    sessionStorage.getItem("user") || "null"
  );

  const [formData, setFormData] = useState<FormData>({
    user_name: user?.user_name || "",
    email: user?.email || "",
    password: "",
    user_img: user?.user_img || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;

    const updatedUser: Partial<User> = {
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
        <ProfilePhoto userImg={formData.user_img} />
        <ProfileForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ProfileEdit;
