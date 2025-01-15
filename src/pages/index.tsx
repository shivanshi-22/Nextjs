import { observer } from "mobx-react-lite";
import Navbar from "../components/Navbar";

import authStore from "../store/authStore";

const Home: React.FC = observer(() => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Next.js + MobX Authentication</h1>
      {authStore.isAuthenticated ? (
        <p>Logged in as: {authStore.user?.email}</p>
      ) : (
        <p>Please log in to access more features.</p>
      )}
    </div>
  );
});

export default Home;
