import React from "react";
import { User, FormRefs } from "../../types";
import InputField from "../InputField";

interface ProfileFormProps {
  user: User | null;
  formRefs: FormRefs;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileForm = ({
  user,
  formRefs,
  handleSubmit,
  handleImageChange,
}: ProfileFormProps) => {
  return (
    <div className="form-profile flex flex-col w-1/2 items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 justify-center w-full"
      >
        <InputField
          ref={formRefs.user_name}
          id="user_name"
          type="text"
          name="user_name"
          defaultValue={user?.user_name || ""}
          placeholder="Enter your name"
          label="Nome"
        />
        <InputField
          ref={formRefs.email}
          id="email"
          type="email"
          name="email"
          defaultValue={user?.email || ""}
          placeholder="Enter your email"
          label="Email"
        />
        <InputField
          ref={formRefs.user_img}
          id="user_img"
          type="text"
          name="user_img"
          defaultValue={user?.user_img || ""}
          onChange={handleImageChange}
          placeholder="Enter image URL"
          label="URL da Foto"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-yellow-500 text-white font-medium rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Salvar Alterações
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
