import { forwardRef } from "react";

interface TextAreaFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  rows?: number;
  defaultValue?: string;
}

const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ id, name, label, placeholder, defaultValue, rows = 3 }, ref) => {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <textarea
          ref={ref}
          id={id}
          name={name}
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          placeholder={placeholder}
          rows={rows}
          defaultValue={defaultValue}
        />
      </div>
    );
  }
);

export default TextAreaField;
