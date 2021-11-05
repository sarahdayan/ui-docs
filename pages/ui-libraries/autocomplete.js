import Head from "next/head";
import { Main } from "../../layouts/main";

export default function Autocomplete() {
  return (
    <Main sidebarComponent={Sidebar}>
      <Head>
        <title>Autocomplete | Algolia Documentation</title>
      </Head>
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
    </Main>
  );
}

function Sidebar() {
  return (
    <div className="grid grid-flow-row gap-5">
      <div className="text-xs uppercase text-gray-400">Introduction</div>
      <ul className="grid grid-flow-row gap-2">
        <li>What is Autocomplete?</li>
        <li>Getting started</li>
        <li>Showcase</li>
        <li>Sandboxes</li>
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
