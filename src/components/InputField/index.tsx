import React, { forwardRef } from "react";

interface InputFieldProps {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  label: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ type, id, name, placeholder, label, defaultValue, onChange }, ref) => {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          id={id}
          name={name}
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      </div>
    );
  }
);

export default InputField;
