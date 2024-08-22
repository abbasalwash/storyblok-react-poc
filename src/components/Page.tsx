import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { renderRichText } from "@storyblok/react";
import parse from "html-react-parser";

import { fetchStory } from "../data/api";
import { PageStoryblok } from "../interfaces/component-types-sb";

const Page = ({ slug }: { slug: string | undefined }) => {
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
    return (
      <>
        <Row className="mt-5 mb-5">
          <h1 className="display-1 text-center">
            <strong>{story?.title}</strong>
          </h1>
        </Row>
        <Row>
          <span className="border">
            {parse(renderRichText(story?.richtext))}
          </span>
        </Row>
      </>
    );
  };

  const renderLoading = () => <p>Loading...</p>;

  return story ? renderBody() : renderLoading();
};

export default Page;
