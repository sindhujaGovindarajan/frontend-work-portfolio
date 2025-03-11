import React from "react";
import Dropdown from "./Dropdown";

interface SortByYearProps {
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

const SortByYear: React.FC<SortByYearProps> = ({ sortBy, setSortBy }) => {
  const options = [
    { value: "all", label: "All" },
    { value: "lastMonth", label: "Last month" },
    { value: "last6Months", label: "Last 6 months" },
    { value: "lastYear", label: "Last year" },
    { value: "last2Years", label: "Last 2 years" },
    { value: "olderThan2Years", label: "Older than 2 years" },
  ];

  return (
    <Dropdown
      label="Sort by Year"
      value={sortBy}
      onChange={setSortBy}
      options={options}
    />
  );
};

export default SortByYear;
