import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Alert, Container, Row } from "react-bootstrap";

import Page from "./components/Page";
import Navigation from "./components/Navigation";
import {
  MenuItemStoryblok,
  NavigationStoryblok,
} from "./interfaces/component-types-sb";
import { fetchStory } from "./data/api";

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

  const generateRoutes = (items: MenuItemStoryblok[] = []) =>
    items?.flatMap((item) => {
      const routes = [
        <Route
          key={item._uid}
          path={`/${item.link?.cached_url}`}
          element={<Page slug={item.link?.cached_url} />}
        />,
      ];

      if (item.submenu_item) {
        routes.push(...generateRoutes(item.submenu_item));
      }

      return routes;
    }) || [];

  const renderRoutes = () => generateRoutes(navigationData?.menu_item);

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
