import Head from "next/head";
import { ReactInstantSearch } from "../../../layouts/react-instantsearch";

export default function Index() {
  return (
    <>
      <Head>
        <title>
          Getting started | React InstantSearch | Algolia Documentation
        </title>
      </Head>
      <ReactInstantSearch />
    </>
  );
}
