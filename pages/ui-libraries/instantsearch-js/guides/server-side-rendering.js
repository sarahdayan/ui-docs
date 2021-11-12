import Head from "next/head";
import { InstantSearchJs } from "../../../../layouts/instantsearch-js";

export default function ServerSideRendering() {
  return (
    <>
      <Head>
        <title>
          Server-side rendering | InstantSearch.js | Algolia Documentation
        </title>
      </Head>
      <InstantSearchJs />
    </>
  );
}
