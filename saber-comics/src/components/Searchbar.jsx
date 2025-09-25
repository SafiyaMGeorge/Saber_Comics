import React from "react";

function SearchBar() {
  return (
    <div>
        <form action="" method="get">
          <input type="text" placeholder="search" className="w-65 py-1 pl-3 bg-blue-50 border border-blue-200 text-gray-700 rounded-sm" />
          <button type="submit"></button>
        </form> 
    </div>
  );
}

export default SearchBar;