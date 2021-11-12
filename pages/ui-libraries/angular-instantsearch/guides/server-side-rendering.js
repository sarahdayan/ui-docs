import Head from "next/head";
import { AngularInstantSearch } from "../../../../layouts/angular-instantsearch";

export default function ServerSideRendering() {
  return (
    <>
      <Head>
        <title>
          Server-side rendering | Angular InstantSearch | Algolia Documentation
        </title>
      </Head>
      <AngularInstantSearch />
    </>
  );
}
