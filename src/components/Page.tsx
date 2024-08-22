import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchStory } from "../data/api";
import { PageStoryblok } from "../interfaces/component-types-sb";
import { Row } from "react-bootstrap";

const Page = ({ slug }: { slug: string | undefined }) => {
  const location = useLocation();
  const [story, setStory] = useState<PageStoryblok | null>(null);

  useEffect(() => {
    if (slug) {
      fetchStory(slug)
        .then((response) =>
          setStory(response.data.story.content as PageStoryblok)
        )
        .catch((error) => console.error(error));
    }
  }, [slug]);

  const renderBody = () => {
    console.log(story?.content?.content);

    return (
      <>
        <h1 className="display-1">{story?.title}</h1>
        <p>Huidig Pad: {location.pathname}</p>
      </>
    );
  };

  const renderLoading = () => <p>Loading...</p>;

  return <Row>{story ? renderBody() : renderLoading()}</Row>;
};

export default Page;
