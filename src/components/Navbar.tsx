// Updated Navbar Component
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useRootStore } from "@/services/root-store/root-store-context";

const Navbar: React.FC = observer(() => {
  const { authStore } = useRootStore();

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
