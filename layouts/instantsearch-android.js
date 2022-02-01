import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { InstantSearch } from "./instantsearch";

export function InstantSearchAndroid() {
  return (
    <InstantSearch
      sidebarComponent={Sidebar}
      currentFlavor="instantsearch-android"
    />
  );
}

function Sidebar() {
  const router = useRouter();
  const [activeSlug, setActiveSlug] = useState("");

  useEffect(() => {
    setActiveSlug(router.pathname.split("/").at(-1));
  }, []);

  return (
    <div className="grid grid-flow-row gap-5">
      <div className="text-xs uppercase text-gray-400">Introduction</div>
      <ul className="grid grid-flow-row gap-2">
        <li>
          <Link href="/ui-libraries/instantsearch-android/">
            <a
              className={[
                "block py-1 cursor-pointer",
                activeSlug === "instantsearch-android" && "font-bold",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              What is InstantSearch Android?
            </a>
          </Link>
        </li>
        <li>
          <Link href="/ui-libraries/instantsearch-android/getting-started">
            <a
              className={[
                "block py-1 cursor-pointer",
                activeSlug === "getting-started" && "font-bold",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              Getting started
            </a>
          </Link>
        </li>
        <li>
          <Link href="/ui-libraries/instantsearch-android/upgrade-guide">
            <a
              className={[
                "block py-1 cursor-pointer",
                activeSlug === "upgrade-guide" && "font-bold",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              Upgrade guide
            </a>
          </Link>
        </li>
      </ul>
      <div className="text-xs uppercase text-gray-400">Core concepts</div>
      <ul className="grid grid-flow-row gap-2">
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
      </ul>
      <div className="text-xs uppercase text-gray-400">Guides</div>
      <ul className="grid grid-flow-row gap-2">
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
      </ul>
      <div className="text-xs uppercase text-gray-400">API reference</div>
      <ul className="grid grid-flow-row gap-2">
        <li>
          <div className="pt-4 pb-6">Basics</div>
          <div
            className={["grid-flow-row gap-5 ml-4", true ? "grid" : "hidden"]
              .filter(Boolean)
              .join(" ")}
          >
            <ul className="grid grid-flow-row gap-2">
              <li>
                <Link href="/ui-libraries/instantsearch-android/api-reference/basics/searcher">
                  <a
                    className={[
                      "block py-1 cursor-pointer",
                      activeSlug === "searcher" && "font-bold",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    Searcher
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/ui-libraries/instantsearch-android/api-reference/basics/searchbox">
                  <a
                    className={[
                      "block py-1 cursor-pointer",
                      activeSlug === "searchbox" && "font-bold",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    SearchBox
                  </a>
                </Link>
              </li>
              <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
              <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
              <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
              <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
            </ul>
          </div>
        </li>
        <li>
          <div className="py-6">Results</div>
          <div
            className={["grid-flow-row gap-5 ml-4", true ? "grid" : "hidden"]
              .filter(Boolean)
              .join(" ")}
          >
            <ul className="grid grid-flow-row gap-2">
              <li>
                <Link href="/ui-libraries/instantsearch-android/api-reference/results/hits">
                  <a
                    className={[
                      "block py-1 cursor-pointer",
                      activeSlug === "hits" && "font-bold",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    Hits
                  </a>
                </Link>
              </li>
              <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
              <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
              <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
