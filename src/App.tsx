import { Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import { NavigationStoryblok } from "./interfaces/component-types-sb";
import { fetchStory } from "./data/api";
import { Alert, Container, Row } from "react-bootstrap";

const App = () => {
  const [navigationData, setNavigationData] =
    useState<NavigationStoryblok | null>(null);

  useEffect(() => {
    fetchStory("navigation")
      .then((response) => {
        setNavigationData(response.data.story.content as NavigationStoryblok);
      })
      .catch((error) => console.error(error));
  }, []);

  const renderRoutes = () =>
    navigationData?.menu_item?.flatMap((item) => {
      const itemRoutes = [
        <Route
          key={item._uid}
          path={`/${item.link?.cached_url}`}
          element={<Page slug={item.link?.cached_url} />}
        />,
      ];

      const subItemRoutes =
        item.submenu_item?.map((subitem) => (
          <Route
            key={subitem._uid}
            path={`/${subitem.link?.cached_url}`}
            element={<Page slug={subitem.link?.cached_url} />}
          />
        )) || [];

      return [...itemRoutes, ...subItemRoutes];
    });

  const renderBody = () => (
    <>
      <Row>
        <Navigation blok={navigationData} />
      </Row>
      <Routes>
        <Route path="/" element={<Page slug={"home"} />} />
        {renderRoutes()}
      </Routes>
    </>
  );

  const renderLoading = () => (
    <Alert key="light" variant="light">
      Loading...
    </Alert>
  );

  return (
    <Container>{navigationData ? renderBody() : renderLoading()}</Container>
  );
};

export default App;
