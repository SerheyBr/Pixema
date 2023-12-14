import React, { FC } from "react";

interface IUserLogoProps {
  img: string;
  email: string;
}

const UserLogo: FC<IUserLogoProps> = ({ email, img }) => {
  return (
    <div className="flex items-center text-gray-50">
      <div className="p-4 mr-4 w-min bg-cyan-600 rounded-xl">
        <img src={img} alt="icon" />
      </div>
      <p>{email}</p>
    </div>
  );
};

export default UserLogo;
