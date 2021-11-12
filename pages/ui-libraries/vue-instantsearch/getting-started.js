import Head from "next/head";
import { VueInstantSearch } from "../../../layouts/vue-instantsearch";

export default function Index() {
  return (
    <>
      <Head>
        <title>
          Getting started | Vue InstantSearch | Algolia Documentation
        </title>
      </Head>
      <VueInstantSearch />
    </>
  );
}
