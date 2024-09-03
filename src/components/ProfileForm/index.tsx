// ProfileForm.tsx

import React from "react";
import { FormData } from "../../types";

interface ProfileFormProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ProfileForm = ({
  formData,
  handleChange,
  handleSubmit,
}: ProfileFormProps) => {
  return (
    <div className="form-profile flex flex-col w-1/2 items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 justify-center"
      >
        <div className="flex items-center">
          <label htmlFor="user_name" className="w-1/4 mr-2 text-sm font-medium">
            Nome:
          </label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            id="user_name"
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
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
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="user_img" className="w-1/4 mr-2 text-sm font-medium">
            URL da Foto:
          </label>
          <input
            type="text"
            name="user_img"
            value={formData.user_img}
            onChange={handleChange}
            id="user_img"
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
        </div>
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
