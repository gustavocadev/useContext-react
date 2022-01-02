import { useContext } from "react";
import UserContext from "../context/User/UserContext";

type GetUserType = {
  getUsers?: () => void;
  getProfile?: (id: number) => void;
  selectedUser?: any;
  users?: any[];
};

const Profile = () => {
  const { selectedUser } = useContext<GetUserType>(UserContext);
  return (
    <>
      {selectedUser ? (
        <div className="flex flex-col items-start">
          <img
            src={selectedUser.avatar}
            alt=""
            className="rounded-2xl block mx-auto"
          />
          <p className="p-4 border border-black m-4 rounded w-full">
            {selectedUser.first_name} {selectedUser.last_name}
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="p-4 border border-black m-4 rounded w-full">
            No user selected
          </p>
        </div>
      )}
    </>
  );
};

export default Profile;
