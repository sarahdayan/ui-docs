import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { InstantSearch } from "./instantsearch";

export function InstantSearchIos() {
  return (
    <InstantSearch
      sidebarComponent={Sidebar}
      currentFlavor="instantsearch-ios"
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
          <Link href="/ui-libraries/instantsearch-ios/">
            <a
              className={[
                "block py-1 cursor-pointer",
                activeSlug === "instantsearch-ios" && "font-bold",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              What is InstantSearch iOS?
            </a>
          </Link>
        </li>
        <li>
          <Link href="/ui-libraries/instantsearch-ios/getting-started">
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
          <Link href="/ui-libraries/instantsearch-ios/upgrade-guide">
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
          <button className="pt-4 pb-6">Basics</button>
          <div
            className={["grid-flow-row gap-5 ml-4", true ? "grid" : "hidden"]
              .filter(Boolean)
              .join(" ")}
          >
            <ul className="grid grid-flow-row gap-2">
              <li>
                <Link href="/ui-libraries/instantsearch-js/api-reference/basics/instantsearch">
                  <a
                    className={[
                      "block py-1 cursor-pointer",
                      activeSlug === "instantsearch" && "font-bold",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    instantsearch
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/ui-libraries/instantsearch-js/api-reference/basics/index-widget">
                  <a
                    className={[
                      "block py-1 cursor-pointer",
                      activeSlug === "index-widget" && "font-bold",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    index
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/ui-libraries/instantsearch-js/api-reference/basics/searchbox">
                  <a
                    className={[
                      "block py-1 cursor-pointer",
                      activeSlug === "searchbox" && "font-bold",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    searchBox
                  </a>
                </Link>
              </li>
              <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
              <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
              <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
            </ul>
          </div>
        </li>
        <li>
          <button className="py-6">Results</button>
          <div
            className={["grid-flow-row gap-5 ml-4", true ? "grid" : "hidden"]
              .filter(Boolean)
              .join(" ")}
          >
            <ul className="grid grid-flow-row gap-2">
              <li>
                <Link href="/ui-libraries/instantsearch-js/api-reference/results/hits">
                  <a
                    className={[
                      "block py-1 cursor-pointer",
                      activeSlug === "hits" && "font-bold",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    hits
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
