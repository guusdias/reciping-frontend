import { ChangeEvent } from "react";

interface InputFieldProps {
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}

const InputField = ({
  type,
  value,
  onChange,
  placeholder,
  className,
}: InputFieldProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default InputField;
