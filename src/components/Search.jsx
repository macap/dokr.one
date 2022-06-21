import React from "react";

const Search = ({ data = [] }) => {
  const [query, setQuery] = React.useState("");
  const results = data.filter((el) =>
    el.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">
      <input
        type="search"
        name="serch"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow px-4 rounded-md border border-gray-300 py-2 w-full focus:outline-none"
      />
      {query.length > 1 ? (
        <div className="absolute w-full z-50 bg-white border border-gray-300 mh-48 overflow-hidden overflow-y-auto rounded-b-md shadow-md">
          {results.length > 0 ? (
            <ul className="block text-left">
              {results.map((res) => (
                <li>
                  <a
                    href={`/tools/${res.slug}`}
                    className="hover:bg-slate-200 block py-1 px-4"
                  >
                    {res.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div>No results</div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
