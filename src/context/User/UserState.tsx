import { ReactNode, useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import axios from "axios";

type GetUserType = {
  getUsers: () => void;
  getProfile: (id: number) => void;
  selectedUser: any;
  users: any[];
};

const UserState = ({ children }: { children: ReactNode }) => {
  const initialState = {
    users: [],
    selectedUser: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = async () => {
    const res = await axios.get("https://reqres.in/api/users");
    console.log(res.data.data);

    dispatch({
      type: "GET_USERS",
      payload: res.data.data,
    });
  };

  const getProfile = async (id: number) => {
    const res = await axios.get(`https://reqres.in/api/users/${id}`);
    console.log(res.data.data);
    dispatch({
      type: "GET_PROFILE",
      payload: res.data.data,
    });
    //   dispatch()
  };

  const data: GetUserType = {
    users: state.users,
    selectedUser: state.selectedUser,
    getUsers,
    getProfile,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserState;
