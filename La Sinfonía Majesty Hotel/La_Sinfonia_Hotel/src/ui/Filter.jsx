import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-2 px-2 border shadow-sm bg-accent-100 border-accent-300 rounded-xl">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleClick(option.value)}
          className={` border-none rounded-2xl font-medium text-xs sm:text-[16px] my-1 px-3 transition-all ${
            option.value === currentFilter
              ? " bg-accent-700 text-gray-100 "
              : " hover: hover:text-slate-200 hover:bg-accent-400"
          }  ${
            option.value === currentFilter ? "disabled hover:disabled " : ""
          }`}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
