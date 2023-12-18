import React, { FC } from "react";

interface ICustomInputProps {
  type: "text" | "number" | "select";
  placeholder?: string;
  onChange?: any;
  value?: string;
  title?: string;
}

const CustomInput: FC<ICustomInputProps> = ({
  type,
  title,
  placeholder,
  onChange,
}) => {
  if (type === "text") {
    return (
      <div className="w-full">
        {title ? (
          <p className="mb-6 text-base font-semibold text-white">{title}</p>
        ) : (
          ""
        )}
        <label className=" w-full px-5 py-4 rounded-xl bg-slate-600 text-white">
          <input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            className="w-full"
          />
        </label>
      </div>
    );
  } else if (type === "number") {
    return (
      <label className=" block px-5 py-4 rounded-xl bg-slate-600 text-white">
        <input type="number" placeholder={placeholder} className="w-full" />
      </label>
    );
  } else if (type === "select") {
    return (
      <label className=" block px-5 py-4 rounded-xl bg-slate-600 text-white">
        <select className="w-full bg-inherit outline-none" name="cantry">
          <option>Moscov</option>
          <option>Belarusia</option>
          <option>Russia</option>
        </select>
      </label>
    );
  }
};

export default CustomInput;
