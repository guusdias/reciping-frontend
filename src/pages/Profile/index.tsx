import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/User";
import { User, FormRefs } from "../../types";
import ProfileForm from "../../components/ProfileForm";
import ProfilePhoto from "../../components/ProfilePhoto";

const Profile = () => {
  const navigate = useNavigate();
  const user: User | null = JSON.parse(
    sessionStorage.getItem("user") || "null"
  );
  const [userImg, setUserImg] = useState<string>(user?.user_img || "");

  const formRefs: FormRefs = {
    user_name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
    user_img: useRef<HTMLInputElement>(null),
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;

    const updatedUser: Partial<User> = {
      user_name: formRefs.user_name.current?.value || user.user_name,
      email: formRefs.email.current?.value || user.email,
      user_img: formRefs.user_img.current?.value || user.user_img,
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserImg(e.target.value);
  };

  return (
    <div className="flex flex-col mt-0 gap-10 items-center shadow-md p-10 rounded-3xl bg-slate-50 h-full w-full">
      <div className="flex flex-row">
        <ProfilePhoto userImg={userImg} />
        <ProfileForm
          user={user}
          formRefs={formRefs}
          handleSubmit={handleSubmit}
          handleImageChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default Profile;
