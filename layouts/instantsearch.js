import { Main } from "./main";
import { useRouter } from "next/router";

export function InstantSearch({ sidebarComponent, currentFlavor }) {
  return (
    <Main sidebarComponent={sidebarComponent}>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <ul className="grid grid-flow-row gap-2">
            <li className="bg-gray-200 rounded h-6 w-full bg-opacity-60"></li>
            <li className="bg-gray-200 rounded h-6 w-full bg-opacity-60"></li>
            <li className="bg-gray-200 rounded h-6 w-full bg-opacity-60"></li>
            <li className="bg-gray-200 rounded h-6 w-full bg-opacity-60"></li>
            <li className="bg-gray-200 rounded h-6 w-full bg-opacity-60"></li>
            <li className="bg-gray-200 rounded h-6 w-full bg-opacity-60"></li>
            <li className="bg-gray-200 rounded h-6 w-full bg-opacity-60"></li>
            <li className="bg-gray-200 rounded h-6 w-full bg-opacity-60"></li>
            <li className="bg-gray-200 rounded h-6 w-full bg-opacity-60"></li>
            <li className="bg-gray-200 rounded h-6 w-full bg-opacity-60"></li>
            <li className="bg-gray-200 rounded h-6 w-full bg-opacity-60"></li>
          </ul>
        </div>
        <div>
          <InstantSearchFlavorSwitcher currentFlavor={currentFlavor} />
        </div>
      </div>
    </Main>
  );
}

function InstantSearchFlavorSwitcher({ currentFlavor }) {
  const router = useRouter();

  return (
    <div className="inline-block relative w-64">
      <select
        defaultValue={currentFlavor}
        onChange={(event) => {
          router.push(`/ui-libraries/${event.target.value}`);
        }}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="instantsearch-js">InstantSearch.js</option>
        <option value="react-instantsearch">React InstantSearch</option>
        <option value="vue-instantsearch">Vue InstantSearch</option>
        <option value="angular-instantsearch">Angular InstantSearch</option>
        <option value="instantsearch-ios">InstantSearch iOS</option>
        <option value="instantsearch-android">InstantSearch Android</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
