import Head from "next/head";
import { InstantSearchJs } from "../../../layouts/instantsearch-js";

export default function Index() {
  return (
    <>
      <Head>
        <title>
          Getting started | InstantSearch.js | Algolia Documentation
        </title>
      </Head>
      <InstantSearchJs />
    </>
  );
}
