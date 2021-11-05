import Head from "next/head";
import { Main } from "../layouts/main";

export default function Home() {
  return (
    <Main>
      <Head>
        <title>Algolia Documentation</title>
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
