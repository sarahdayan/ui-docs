import Head from "next/head";
import { InstantSearch } from "../../layouts/instantsearch";

export default function InstantSearchAndroid() {
  return (
    <>
      <Head>
        <title>InstantSearch Android | Algolia Documentation</title>
      </Head>
      <InstantSearch
        sidebarComponent={Sidebar}
        currentFlavor="instantsearch-android"
      />
    </>
  );
}

function Sidebar() {
  return (
    <div className="grid grid-flow-row gap-5">
      <div className="text-xs uppercase text-gray-400">Introduction</div>
      <ul className="grid grid-flow-row gap-2">
        <li>What is InstantSearch Android?</li>
        <li>Getting started</li>
        <li>Upgrade guide</li>
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
