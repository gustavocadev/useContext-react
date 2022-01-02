import Profile from "./components/Profile";
import UserList from "./components/UserList";

// context
import UserState from "./context/User/UserState";
const App = () => {
  return (
    <UserState>
      <section className="grid grid-cols-2">
        <UserList />
        <Profile />
      </section>
    </UserState>
  );
};

export default App;
