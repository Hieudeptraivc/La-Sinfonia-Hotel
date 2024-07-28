function BenefitRoom({ children, value }) {
  return (
    <div className="px-20 text-start md:px-0 ">
      <p className="md:text-xl xl:text-2xl font-playfair">{children}</p>
      <ul className="pl-12 font-thin list-disc md:text-lg xl:text-xl ">
        {value.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default BenefitRoom;
