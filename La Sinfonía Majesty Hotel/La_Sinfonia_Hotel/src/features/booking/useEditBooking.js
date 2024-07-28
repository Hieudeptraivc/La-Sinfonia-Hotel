import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateBooking } from "../../services/apiBooking";

export function useEditBooking() {
  const queryClient = useQueryClient();

  const { mutate: editBooking, isPending: isEditing } = useMutation({
    mutationFn: ({ edit, id }) => updateBooking({ edit, id }),
    onSuccess: (data) => {
      toast.success("Booking successfully edited");
      const id = data?.data.id;
      console.log(data, id);
      queryClient.invalidateQueries({ queryKey: ["booking", id] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editBooking };
}
