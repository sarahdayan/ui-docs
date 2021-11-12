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
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
        <li className="bg-gray-200 rounded h-6 w-full bg-opacity-75"></li>
      </ul>
    </div>
  );
}
