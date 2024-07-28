import { FaTrashAlt } from "react-icons/fa";
import SpinnerMini from "../../ui/SpinnerMini";
import { useDeleteBooking } from "./useDeletaReservation";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Window from "../../ui/Window";
export function DeleteBooking({ bookingId }) {
  const { isDeleting, deleteBooking } = useDeleteBooking();
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  return (
    <div>
      {!isOpen ? (
        <button
          onClick={open}
          className="flex items-center flex-grow gap-[6px] px-[10px] text-[8px] sm:text-xs font-bold uppercase transition-colors group text-accent-700 hover:text-primary-900"
        >
          {!isDeleting ? (
            <>
              <FaTrashAlt className="w-5 h-5 transition-colors text-accent-700 group-hover:text-primary-800" />
              <span className="mt-1">Delete</span>
            </>
          ) : (
            <span className="mx-auto">
              <SpinnerMini />
            </span>
          )}
        </button>
      ) : (
        <Window open={isOpen} close={close}>
          <ConfirmDelete
            resourceName="booking"
            disabled={isDeleting}
            onConfirm={() => deleteBooking(bookingId)}
          />
        </Window>
      )}
    </div>
  );
}
