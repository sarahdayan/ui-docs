import Head from "next/head";
import { ReactInstantSearch } from "../../../../layouts/react-instantsearch";

export default function ServerSideRendering() {
  return (
    <>
      <Head>
        <title>
          Server-side rendering | React InstantSearch | Algolia Documentation
        </title>
      </Head>
      <ReactInstantSearch />
    </>
  );
}
