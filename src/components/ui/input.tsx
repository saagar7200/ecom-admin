import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

type InputProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
};

const Input = ({
  name,
  label,
  type = 'text',
  placeholder = '',
 
  defaultValue = '',
}: InputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // Use this to access form state from parent form

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            id={name}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
          />
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name as string]?.message  as string}</p>
      )}
    </div>
  );
};

export default Input;
