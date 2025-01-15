import { observer } from "mobx-react-lite";
import Link from "next/link";
import authStore from "../store/authStore";

const Navbar: React.FC = observer(() => {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link href="/">
        <a style={{ marginRight: "10px" }}>Home</a>
      </Link>
      {!authStore.isAuthenticated ? (
        <Link href="/login">
          <a>Login</a>
        </Link>
      ) : (
        <button onClick={() => authStore.logout()}>Logout</button>
      )}
    </nav>
  );
});

export default Navbar;
