function IconRoom({ icon, children }) {
  return (
    <div className="flex flex-col items-center col-span-1 max-w-36">
      {icon}
      <span className="pt-4 text-xl">{children}</span>
    </div>
  );
}

export default IconRoom;
