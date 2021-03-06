import * as React from "react";

const menuItems = [
  ["/", "Home"],
  ["/cheatsheet", "Docker cheatsheet"],
  ["/about", "About"],
  // ["/faq", "FAQ"],
];

const Navbar = () => (
  <div className="w-full flex flex-row items-center py-2 px-4 justify-between bg-white shadow-xs bg-sky-900">
    <div className="flex">
      <div className="text-md text-sky-500 flex py-2 uppercase font-medium">
        docker oneliners
      </div>
      <div className="hidden md:block">
        <div className="ml-4 flex items-baseline space-x-4">
          {menuItems.map(([url, label]) => (
            <a
              className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md"
              href={url}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
    {false ? (
      <span className="w-full md:w-1/3 h-10 cursor-pointer border border-gray-300 text-sm rounded-full flex">
        <input
          type="search"
          name="serch"
          placeholder="Search"
          className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
        />
      </span>
    ) : null}
    <div className="flex flex-row-reverse text-white mr-4 ml-4 md:hidden">
      <button>
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="h-8 w-8"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
        </svg>
      </button>
    </div>
    <div className="flex items-center hidden md:flex">
      <a
        href="https://github.com/macap/dokr.one"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1 rounded-full text-white focus:outline-none hover:text-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      >
        <span className="sr-only">View github</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="text-xl transition-colors duration-200"
          viewBox="0 0 1792 1792"
        >
          <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
        </svg>
      </a>
    </div>
  </div>
);

const Layout = ({ children }) => (
  <div className="min-h-screen">
    <Navbar />
    {children}
  </div>
);

export default Layout;
