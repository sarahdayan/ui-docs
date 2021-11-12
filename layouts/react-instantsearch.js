import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { InstantSearch } from "./instantsearch";

export function ReactInstantSearch() {
  return (
    <InstantSearch
      sidebarComponent={Sidebar}
      currentFlavor="react-instantsearch"
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
          <Link href="/ui-libraries/react-instantsearch/">
            <a
              className={[
                "block py-1 cursor-pointer",
                activeSlug === "react-instantsearch" && "font-bold",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              What is React InstantSearch?
            </a>
          </Link>
        </li>
        <li>
          <Link href="/ui-libraries/react-instantsearch/getting-started">
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
          <Link href="/ui-libraries/react-instantsearch/upgrade-guide">
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
        <li>
          <Link href="/ui-libraries/react-instantsearch/guides/server-side-rendering">
            <a
              className={[
                "block py-1 cursor-pointer",
                activeSlug === "server-side-rendering" && "font-bold",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              Server-side rendering
            </a>
          </Link>
        </li>
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
      </ul>
      <div className="text-xs uppercase text-gray-400">API reference</div>
      <ul className="grid grid-flow-row gap-2">
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
      </ul>
    </div>
  );
}
