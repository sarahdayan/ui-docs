import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Main } from "../../layouts/main";

export default function EnablingPersonalization() {
  const router = useRouter();
  const [isTabs, setIsTabs] = useState([
    {
      name: "JavaScript",
      id: "js",
      content: `instantsearch.widgets.configure({
  enablePersonalization: true,
  userToken: 'user-1234',
});`,
      current: true,
    },
    {
      name: "React",
      id: "react",
      content: `import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  '**********',
  '**********'
);
    
const App = () => (
  <InstantSearch
    indexName="instant_search"
    searchClient={searchClient}
  >
    <Configure enablePersonalization={true} userToken="user-1234" />
  </InstantSearch>
);`,
      current: false,
    },
    {
      name: "Vue",
      id: "vue",
      content: `<template>
  <ais-instant-search
    index-name="instant_search"
    :search-client="searchClient"
  >
    <ais-configure :clickAnalytics="true" userToken="user-1234" />
  </ais-instant-search>
</template>

<script>
  import algoliasearch from 'algoliasearch/lite';

  export default {
    data() {
      return {
        searchClient: algoliasearch(
          '**********',
          '**********'
        ),
      };
    },
  };
</script>`,
      current: false,
    },
    {
      name: "Angular",
      id: "angular",
      content: `<ais-configure
  [searchParameters]="{ enablePersonalization: true, userToken: 'user-1234' }"
></ais-configure>`,
      current: false,
    },
    {
      name: "iOS",
      id: "ios",
      content: `searcher.indexQueryState.query.enablePersonalization = true
searcher.indexQueryState.query.userToken = 'user-1234'`,
      current: false,
    },
    {
      name: "Android",
      id: "android",
      content: `searcher.query.query.enablePersonalization = true
searcher.query.userToken = 'user-1234'`,
      current: false,
    },
  ]);
  const [acTabs, setAcTabs] = useState([
    {
      name: "Autocomplete JS",
      id: "js",
      content: `// some autocomplet-js code`,
      current: true,
    },
    {
      name: "Autocomplete Core",
      id: "core",
      content: `// some autocomplet-core code`,
      current: false,
    },
  ]);

  function setActiveIsTabById(id) {
    setIsTabs(
      isTabs.map((tab) => ({
        ...tab,
        current: tab.id === id,
      }))
    );
  }

  function setActiveAcTabById(id) {
    setAcTabs(
      acTabs.map((tab) => ({
        ...tab,
        current: tab.id === id,
      }))
    );
  }

  useEffect(() => {
    if (router.query.instantsearch) {
      setActiveIsTabById(router.query.instantsearch);
    }
  }, [router.query.instantsearch]);

  useEffect(() => {
    if (router.query.autocomplete) {
      setActiveAcTabById(router.query.autocomplete);
    }
  }, [router.query.autocomplete]);

  return (
    <>
      <Head>
        <title>
          Enabling Personalization | Personalization | Algolia Documentation
        </title>
      </Head>
      <Main>
        <h2 className="mb-4 text-lg">
          Enabling Personalization with InstantSearch
        </h2>
        <div>
          <div className="hidden sm:block">
            <nav className="flex space-x-4" aria-label="Tabs">
              {isTabs.map((tab) => (
                <button
                  key={tab.name}
                  className={classNames(
                    tab.current
                      ? "bg-gray-200 text-gray-800"
                      : "text-gray-600 hover:text-gray-800",
                    "px-3 py-2 font-medium text-sm rounded-md"
                  )}
                  onClick={() => router.push(`?instantsearch=${tab.id}`)}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
            <div className="p-6 bg-gray-200 rounded-md mt-2">
              {isTabs.map((tab) => (
                <div
                  key={tab.name}
                  className={classNames(!tab.current && "hidden")}
                >
                  <pre className="text-sm">{tab.content}</pre>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h2 className="mt-6 mb-4 text-lg">
          Enabling Personalization with Autocomplete
        </h2>
        <div>
          <div className="hidden sm:block">
            <nav className="flex space-x-4" aria-label="Tabs">
              {acTabs.map((tab) => (
                <button
                  key={tab.name}
                  className={classNames(
                    tab.current
                      ? "bg-gray-200 text-gray-800"
                      : "text-gray-600 hover:text-gray-800",
                    "px-3 py-2 font-medium text-sm rounded-md"
                  )}
                  onClick={() => router.push(`?autocomplete=${tab.id}`)}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
            <div className="p-6 bg-gray-200 rounded-md mt-2">
              {acTabs.map((tab) => (
                <div className={classNames(!tab.current && "hidden")}>
                  <pre className="text-sm">{tab.content}</pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
