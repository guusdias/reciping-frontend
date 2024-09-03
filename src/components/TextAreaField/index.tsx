import { ChangeEvent } from "react";

interface TextAreaFieldProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  className?: string;
}

const TextAreaField = ({
  value,
  onChange,
  placeholder,
  className,
}: TextAreaFieldProps) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default TextAreaField;
