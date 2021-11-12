import Head from "next/head";
import { VueInstantSearch } from "../../../../layouts/vue-instantsearch";

export default function ServerSideRendering() {
  return (
    <>
      <Head>
        <title>
          Server-side rendering | Vue InstantSearch | Algolia Documentation
        </title>
      </Head>
      <VueInstantSearch />
    </>
  );
}
