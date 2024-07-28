const Button = ({ size, variation, children, ...props }) => {
  const sizeClasses = {
    small: "text-xs py-1 px-2 uppercase font-semibold text-center",
    medium: "text-sm py-3 px-4 font-medium",
    large: "text-base py-3 px-6 font-medium hover:bg-accent-300",
  };

  const variationClasses = {
    primary: "text-white bg-blue-600 hover:bg-blue-700",
    secondary:
      "text-gray-600 bg-white border-1 border-accent-200 hover:bg-slate-100",
    danger: "text-red-100 bg-red-700 hover:bg-red-800",
  };

  return (
    <button
      className={`border-none rounded p-[6px] shadow-sm ${sizeClasses[size]} ${variationClasses[variation]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
