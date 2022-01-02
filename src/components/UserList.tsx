import { useEffect } from "react";

import { useContext } from "react";
import UserContext from "../context/User/UserContext";

type GetUserType = {
  getUsers?: () => void;
  getProfile?: (id: number) => void;
  selectedUser?: any;
  users?: any[];
};

const UserList = () => {
  const { users, getUsers, getProfile } = useContext<GetUserType>(UserContext);

  useEffect(() => {
    if (getUsers) {
      getUsers();
      //   console.log(users);
    }
  }, []);
  return (
    <main className="container mx-auto">
      {users?.map((user) => {
        return (
          getProfile && (
            <a
              key={user.id}
              className="flex cursor-pointer mb-4"
              onClick={() => getProfile(user.id)}
            >
              <figure className="my-4">
                <img src={user.avatar} alt="" className="rounded-2xl" />
                {/* <figcaption></figcaption>} */}
              </figure>
              <p className="p-4 border border-black m-4 rounded w-full">
                {" "}
                {user.first_name} {user.last_name}
              </p>
            </a>
          )
        );
      })}
    </main>
  );
};

export default UserList;
