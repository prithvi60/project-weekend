import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function Dropdown({ category, type, list, setList }) {
//   const [list, setList] = useState(category[0]);

  return (
    <div
      style={{ zIndex: "1000" }}
      className="fixed w-32"
      style={{
        right: type === "area" ? "12rem" : "4rem",
      }}
    >
      <Listbox value={list} onChange={setList}>
        <div className="relative">
          <Listbox.Button
            //   className="relative w-full cursor-default rounded-lg bg-white py-1 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#98a8cd] sm:text-sm"
            className="relative flex-none rounded-full bg-gray-900 py-2 pl-3 pr-10  text-xs font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 md:text-sm"
          >
            <span className="block truncate">{list.name}</span>
            {/* <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span> */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-4 flex items-center"
            >
              &rarr;
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className=" absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              style={{ zIndex: "1000" }}
            >
              {category.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-[#98a8cd] text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ list }) => (
                    <>
                      <span
                        className={`block truncate ${
                          list ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {list ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-900">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
