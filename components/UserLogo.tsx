import React, { FC } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface IUserLogoProps {
  img: string;
  email: string;
}

const UserLogo: FC<IUserLogoProps> = ({ email, img }) => {
  const user = false;
  return (
    <div className="flex items-center text-gray-50">
      {user ? (
        <>
          <div className="p-4 mr-4 w-min bg-cyan-600 rounded-xl">
            <img src={img} alt="icon" />
          </div>
          <p>{email}</p>
        </>
      ) : (
        <button className="p-4 mr-4 w-min bg-cyan-600 rounded-xl hover:bg-cyan-500 duration-150">
          <div className="">
            <AccountCircleIcon sx={{ fontSize: 30 }} />
          </div>
        </button>
      )}
    </div>
  );
};

export default UserLogo;
