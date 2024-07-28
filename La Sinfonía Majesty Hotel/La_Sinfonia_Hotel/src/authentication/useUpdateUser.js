import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../utils/helpers";

export function useUpdateUser(setIsUpdate) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: (updatedUser) => updateCurrentUser(updatedUser),
    onSuccess: () => {
      toast.success("User account successfully updated");
      setIsUpdate(false);
      removeToken();

      queryClient.setQueryData(["user"], null);
      queryClient.setQueryData(["bookings"], null);
      navigate("/login", { replace: true });
    },
    onError: (err) => (
      setIsUpdate(true), toast.error(err.message), window.scroll(0, 5)
    ),
  });

  return { updateUser, isUpdating };
}
