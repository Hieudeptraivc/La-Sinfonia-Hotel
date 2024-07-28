import { cloneElement } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

function Window({ children, close }) {
  const ref = useOutsideClick(close);

  return createPortal(
    <div className="fixed inset-0 z-30 flex items-center justify-center transition-all duration-300 bg-black bg-opacity-80 animate-fadeIn">
      <div
        ref={ref}
        className="fixed p-8 transition-all transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-accent-100 top-1/2 left-1/2"
      >
        <button
          onClick={close}
          className="absolute p-1 transition-all transform border-none rounded-sm top-3 right-4 bg-none"
        >
          <HiXMark className="w-6 h-6 text-primary-900 hover:text-red-500" />
        </button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

export default Window;
