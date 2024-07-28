import { login as getLogin } from "../services/apiAuth";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { setToken } from "../utils/helpers";

export function useLogin() {
  const queryClient = useQueryClient();
  const {
    mutate: login,
    isPending,
    isFetching,
  } = useMutation({
    mutationFn: ({ email, password }) => getLogin({ email, password }),
    onSuccess: async (user) => {
      setToken(user.jwt);
      // const data = await getCurrentUser(user.jwt);
      queryClient.setQueryData(["user"], user.user);
      await queryClient.invalidateQueries(["user"]);
      toast.success("Login success");
      window.scrollTo(0, 5);
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error(err.message);
    },
  });

  return { login, isPending, isFetching };
}

export default useLogin;
