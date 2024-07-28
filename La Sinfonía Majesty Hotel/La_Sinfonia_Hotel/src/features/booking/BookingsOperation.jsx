import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function BookingsOperation() {
  return (
    <div className="flex flex-col gap-3 lg:gap-8 lg:flex-row">
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "confirmed", label: "Confirmed" },
          { value: "operations", label: "Operations" },
          { value: "completed", label: "Completed" },
        ]}
      />
      <SortBy
        options={[
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
          { value: "totalPrice-desc", label: "Sort by amount (high first)" },
          { value: "dateStart-asc", label: "Sort by date (recent first)" },
          { value: "dateStart-desc", label: "Sort by date (earlier first)" },
        ]}
      />
    </div>
  );
}

export default BookingsOperation;
