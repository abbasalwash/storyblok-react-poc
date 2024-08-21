import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Page from "./components/Page";
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import { NavigationStoryblok } from "./interfaces/component-types-sb";
import { fetchStories } from "./data/api";
import { Alert } from "react-bootstrap";

const App = () => {
  const [navigationData, setNavigationData] = useState<NavigationStoryblok | null>(null);

  useEffect(() => {
    fetchStories("navigation")
      .then((response) => {
        setNavigationData(response.data.story.content as NavigationStoryblok);
      })
      .catch((error) => console.error(error));
  }, []);

  const renderRoutes = () => (
    navigationData?.menu_item?.flatMap((item) => {
      const itemRoutes = [
        <Route key={item._uid} path={`/${item.link?.cached_url}`} element={<Page />} />
      ];

      const subItemRoutes = item.submenu_item?.map((subitem) => (
        <Route key={subitem._uid} path={`/${subitem.link?.cached_url}`} element={<Page />} />
      )) || [];

      return [...itemRoutes, ...subItemRoutes];
    })
  );

  const renderBody = () => (
    <>
      <Navigation blok={navigationData} />
      <Routes>
        <Route path="/" element={<Home />} />
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
    <div className="container">
      {navigationData ? renderBody() : renderLoading()}
    </div>
  );
};

export default App;