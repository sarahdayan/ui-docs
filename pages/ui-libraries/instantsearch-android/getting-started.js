import Head from "next/head";
import { InstantSearchAndroid } from "../../../layouts/instantsearch-android";

export default function Index() {
  return (
    <>
      <Head>
        <title>
          Getting started | InstantSearch Android | Algolia Documentation
        </title>
      </Head>
      <InstantSearchAndroid />
    </>
  );
}
