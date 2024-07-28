import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "./useUser";
import Spinner from "../ui/Spinner";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isAuthenticated, isPending } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isPending) {
        navigate("/login");
      }
    },
    [isAuthenticated, navigate, isPending]
  );
  if (isPending)
    return (
      <div className="z-20 relative flex h-screen lg:[600px] items-center justify-center  bg-black">
        <Spinner />;
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
