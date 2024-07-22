import { useNavigate } from "react-router-dom";

export function AppBar() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>
        Landing
      </button>

      <button onClick={() => navigate("/dashboard")}>
        Dashboard
      </button>
    </div>
  );
};