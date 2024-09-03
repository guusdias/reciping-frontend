import { ChangeEvent, forwardRef } from "react";

interface InputFieldProps {
  type: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  name: string;
  label: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { type, defaultValue, onChange, placeholder, className, name, label },
    ref
  ) => {
    return (
      <div className="flex-col justify-between items-center">
        <label htmlFor={name} className="w-1/4 mr-2 text-sm font-medium">
          {label}:
        </label>
        <input
          ref={ref}
          type={type}
          name={name}
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder}
          id={name}
          className={`flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 w-full ${className}`}
        />
      </div>
    );
  }
);

export default InputField;
