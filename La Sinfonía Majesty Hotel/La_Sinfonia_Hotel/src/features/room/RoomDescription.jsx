function RoomDescription({ icon, children, type }) {
  return (
    <div
      className={`${type === "room" ? "text-base md:text-lg lg:text-xl text-start font-thin" : "text-base"} flex flex-row items-baseline py-1 `}
    >
      <span>{icon}</span>
      <p className="px-2">{children}</p>
    </div>
  );
}

export default RoomDescription;
