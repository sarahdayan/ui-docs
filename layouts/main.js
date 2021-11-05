import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";

export function Main({
  children,
  sidebarComponent: SidebarComponent = Sidebar,
}) {
  const router = useRouter();
  const pullDownMenuRef = useRef(null);
  const ecosystemButtonRef = useRef(null);
  const [isPullDownMenuOpen, setIsPullDownMenuOpen] = useState(false);

  useClickAway(pullDownMenuRef, (event) => {
    const clickedEcosystemButton = event.target === ecosystemButtonRef.current;

    if (!clickedEcosystemButton) {
      setIsPullDownMenuOpen(false);
    }
  });

  useEffect(() => {
    setIsPullDownMenuOpen(false);
  }, [router.route]);

  return (
    <div className="relative min-h-screen h-full">
      <div className="w-1/2 h-full bg-gray-100 absolute top-0 left-0" />
      <div className="w-1/2 h-full bg-gray-50 absolute top-0 right-0" />
      <div
        ref={pullDownMenuRef}
        className={[
          "bg-white shadow-lg absolute top-0 left-0 right-0 h-1/2 z-10",
          isPullDownMenuOpen ? "block" : "hidden",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="border-t border-gray-100 mt-20">
          <div className="container mx-auto mt-8 px-8">
            <div className="grid grid-cols-3 gap-12">
              <div className="grid grid-flow-row auto-rows-max gap-6">
                <h2 className="font-semibold text-gray-400">API Client</h2>
                <ul className="grid grid-cols-2 grid-flow-row gap-2">
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
              <div className="grid grid-flow-row auto-rows-max gap-6">
                <h2 className="font-semibold text-gray-400">UI Libraries</h2>
                <ul className="grid grid-cols-2 grid-flow-row gap-2">
                  <li>
                    <Link href="/ui-libraries/instantsearch-js">
                      <a className="block py-1 cursor-pointer">
                        InstantSearch.js
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ui-libraries/angular-instantsearch">
                      <a className="block py-1 cursor-pointer">
                        Angular InstantSearch
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ui-libraries/react-instantsearch">
                      <a className="block py-1 cursor-pointer">
                        React InstantSearch
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ui-libraries/instantsearch-ios">
                      <a className="block py-1 cursor-pointer">
                        InstantSearch iOS
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ui-libraries/vue-instantsearch">
                      <a className="block py-1 cursor-pointer">
                        Vue InstantSearch
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ui-libraries/instantsearch-android">
                      <a className="block py-1 cursor-pointer">
                        InstantSearch Android
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ui-libraries/autocomplete">
                      <a className="block py-1 cursor-pointer">Autocomplete</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ui-libraries/recommend">
                      <a className="block py-1 cursor-pointer">Recommend</a>
                    </Link>
                  </li>
                </ul>
                <h2 className="font-semibold text-gray-400">Tools</h2>
                <ul className="grid grid-cols-2 grid-flow-row gap-2">
                  <li className="bg-gray-200 rounded h-6 w-full bg-opacity-60"></li>
                </ul>
              </div>
              <div className="grid grid-flow-row auto-rows-max gap-6">
                <h2 className="font-semibold text-gray-400">API Parameters</h2>
                <ul className="grid grid-cols-2 grid-flow-row gap-2">
                  <li className="bg-gray-200 rounded h-6 w-full bg-opacity-60"></li>
                </ul>
                <h2 className="font-semibold text-gray-400">REST API</h2>
                <ul className="grid grid-cols-2 grid-flow-row gap-2">
                  <li className="bg-gray-200 rounded h-6 w-full bg-opacity-60"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative container mx-auto bg-gray-50 h-screen">
        <div className="grid grid-cols-6 h-full">
          <div className="bg-gray-100 col-span-2">
            <Link href="/">
              <a className="block px-8 py-6 text-gray-400 relative z-20 cursor-pointer">
                Algolia Docs
              </a>
            </Link>
            <div className="px-8">
              <SidebarComponent />
            </div>
          </div>
          <div className="col-span-4">
            <ul className="flex relative z-20">
              <li className="px-8 py-6 cursor-not-allowed">Guides</li>
              <li
                className={[
                  "px-8 py-6",
                  router.query.focus === "ecosystem" &&
                    "border-blue-400 ring rounded",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <button
                  ref={ecosystemButtonRef}
                  onClick={() => setIsPullDownMenuOpen((isOpen) => !isOpen)}
                >
                  Ecosystem
                </button>
              </li>
              <li className="px-8 py-6 cursor-not-allowed">Integrations</li>
              <li className="px-8 py-6 cursor-not-allowed">FAQ</li>
            </ul>
            <div className="px-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  const router = useRouter();
  const [isSidebarItemOpen, setIsSidebarItemOpen] = useState(false);

  useEffect(() => {
    setIsSidebarItemOpen(router.query["sidebar-item-open"] !== undefined);
  }, [router.query["sidebar-item-open"]]);

  return (
    <ul className="grid grid-flow-row gap-2">
      <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
      <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
      <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
      <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
      <li
        className={[
          isSidebarItemOpen && "pb-6",
          router.query.focus === "building-search-ui" &&
            "border-blue-400 ring rounded",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <button
          className="py-6"
          onClick={() => setIsSidebarItemOpen((isOpen) => !isOpen)}
        >
          Building Search UI
        </button>
        <div
          className={[
            "grid-flow-row gap-5 ml-4",
            isSidebarItemOpen ? "grid" : "hidden",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className="text-xs uppercase text-gray-400">Ecosystem</div>
          <ul className="grid grid-flow-row gap-2">
            <li>InstantSearch</li>
            <li>Autocomplete</li>
            <li>Recommend</li>
          </ul>
          <div className="text-xs uppercase text-gray-400">Some category</div>
          <ul className="grid grid-flow-row gap-2">
            <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
            <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
            <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
          </ul>
          <div className="text-xs uppercase text-gray-400">Some category</div>
          <ul className="grid grid-flow-row gap-2">
            <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
            <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
            <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
          </ul>
        </div>
      </li>
      <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
      <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
      <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
      <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
      <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
      <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
      <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
      <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
      <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
    </ul>
  );
}
