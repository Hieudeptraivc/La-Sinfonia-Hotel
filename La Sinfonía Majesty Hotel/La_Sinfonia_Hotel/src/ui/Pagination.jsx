import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constant";
import { useEffect } from "react";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-between w-full py-1 text-xs text-white sm:text-base">
      <p className="text-1.4rem ml-2">
        Showing{" "}
        <span className="font-semibold">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span className="font-semibold">{count}</span> results
      </p>

      <div className="flex gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`
                      ${currentPage === 1 ? "" : " hover:text-yellow-300"} 
                      border-none rounded-sm font-medium font-roboto flex items-center justify-center gap-1 
                      px-3 py-1.5 transition duration-300 `}
        >
          <HiChevronLeft /> <span>Previous</span>
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className={`
                      ${currentPage === pageCount ? "" : "hover:text-yellow-300"} 
                      border-none rounded-sm font-medium font-roboto  flex items-center justify-center gap-1 
                      px-3 py-1.5 transition duration-300 `}
        >
          <span>Next</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
