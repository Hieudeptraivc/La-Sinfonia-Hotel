import { useNavigate } from "react-router-dom";

import { signup as getSignUp } from "../services/apiAuth";

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useSignUp(setIsOpen) {
  const navigate = useNavigate();
  const {
    mutate: signup,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: getSignUp,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verufy the new account from the user's email address."
      );
      setIsOpen(true);
      navigate("/login", { replace: true });
      window.scrollTo(0, 5);
    },
    onError: () => {
      toast.error("Your email or username has been registered ");
      setIsOpen(false);
      window.scrollTo(0, 5);
    },
  });

  return { signup, isLoading, isError };
}
