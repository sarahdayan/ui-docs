import Head from "next/head";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox } from "react-instantsearch-dom";

import { InstantSearchJs } from "../../../../../layouts/instantsearch-js";

import "instantsearch.css/themes/satellite.css";

const searchClient = algoliasearch(
  "B1G2GM9NG0",
  "4346eed3e29302b5fe1a2b64e9f14997"
);

export default function SearchBoxPage() {
  return (
    <>
      <Head>
        <title>
          searchBox widget reference | InstantSearch.js | Algolia Documentation
        </title>
      </Head>
      <InstantSearchJs>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">searchBox</h1>
          <div className="shadow-xl rounded-md overflow-hidden">
            <pre className="p-4 bg-gray-200 overflow-x-scroll">
              <div className="font-sans uppercase text-xs tracking-wider mb-4 text-gray-400">
                Signature
              </div>
              <code>{`instantsearch.widgets.searchBox({
  container: string | HTMLElement,
  // Optional parameters
  placeholder?: string,
  autofocus?: boolean,
  searchAsYouType?: boolean,
  showReset?: boolean,
  showSubmit?: boolean,
  showLoadingIndicator?: boolean,
  queryHook?: (query: string, hook: (value: string) => void) => void,
  templates?: SearchBoxTemplates,
  cssClasses?: SearchBoxCSSClasses,
});`}</code>
            </pre>
            <div className="p-4 space-y-4">
              <div className="font-sans uppercase text-xs tracking-wider text-gray-400">
                Preview
              </div>
              <InstantSearch
                searchClient={searchClient}
                indexName="demo_ecommerce"
              >
                <SearchBox />
              </InstantSearch>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="py-4 px-6 rounded-full bg-white shadow">
              See code examples
            </button>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-16 mb-4">
              About this widget
            </h2>
            <p>
              The{" "}
              <code className="bg-gray-200 rounded-md px-1 py-0.5">
                searchBox
              </code>{" "}
              widget is used to let the user perform a text-based query.
            </p>
            <p>
              This usually is the main entry point to start the search in an
              InstantSearch context. It is usually placed at the top of a search
              experience, so that the user can start searching right away.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-16 mb-4">Types</h2>
            <h3 className="text-xl font-semibold mt-8 mb-4">
              SearchBoxTemplates
            </h3>
            <table>
              <thead className="font-sans uppercase text-xs tracking-wider text-gray-400">
                <tr>
                  <td className="p-2">Key</td>
                  <td className="p-2">Value</td>
                  <td className="p-2">Description</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2" valign="top">
                    <code className="bg-gray-200 rounded-md px-1 py-0.5">
                      submit
                    </code>
                  </td>
                  <td className="p-2" valign="top">
                    <code className="bg-gray-200 rounded-md px-1 py-0.5">
                      Template
                    </code>
                  </td>
                  <td className="p-2" valign="top">
                    <p>
                      Template used for displaying the submit button. Can accept
                      a function or a Hogan string.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-2" valign="top">
                    <code className="bg-gray-200 rounded-md px-1 py-0.5">
                      reset
                    </code>
                  </td>
                  <td className="p-2" valign="top">
                    <code className="bg-gray-200 rounded-md px-1 py-0.5">
                      Template
                    </code>
                  </td>
                  <td className="p-2" valign="top">
                    <p>
                      Template used for displaying the reset button. Can accept
                      a function or a Hogan string.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-2" valign="top">
                    <code className="bg-gray-200 rounded-md px-1 py-0.5">
                      loadingIndicator
                    </code>
                  </td>
                  <td className="p-2" valign="top">
                    <code className="bg-gray-200 rounded-md px-1 py-0.5">
                      Template
                    </code>
                  </td>
                  <td className="p-2" valign="top">
                    <p>
                      Template used for displaying the loading indicator. Can
                      accept a function or a Hogan string.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3 className="text-xl font-semibold mt-8 mb-4">
              SearchBoxCSSClasses
            </h3>
            <table>
              <thead className="font-sans uppercase text-xs tracking-wider text-gray-400">
                <tr>
                  <td className="p-2">Key</td>
                  <td className="p-2">Value</td>
                  <td className="p-2">Description</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2" valign="top">
                    <code className="bg-gray-200 rounded-md px-1 py-0.5">
                      root
                    </code>
                  </td>
                  <td className="p-2" valign="top">
                    <code className="bg-gray-200 rounded-md px-1 py-0.5">
                      string | string[]
                    </code>
                  </td>
                  <td className="p-2" valign="top">
                    <p>CSS class to add to the wrapping div.</p>
                  </td>
                </tr>
                <tr>
                  <td className="p-2" valign="top">
                    <code className="bg-gray-200 rounded-md px-1 py-0.5">
                      form
                    </code>
                  </td>
                  <td className="p-2" valign="top">
                    <code className="bg-gray-200 rounded-md px-1 py-0.5">
                      string | string[]
                    </code>
                  </td>
                  <td className="p-2" valign="top">
                    <p>CSS class to add to the form</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </InstantSearchJs>
    </>
  );
}
