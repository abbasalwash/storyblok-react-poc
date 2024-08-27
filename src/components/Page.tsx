import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { renderRichText, StoryblokComponent, storyblokEditable, useStoryblok } from "@storyblok/react";
import parse from "html-react-parser";

import { fetchStory } from "../data/api";
import { FileItemStoryblok, PageStoryblok } from "../interfaces/component-types-sb";
import React from "react";

export type FileTypes = "pdf" | "image";

interface IFileTypes {
    Pdf: FileTypes,
    Image: FileTypes
}

export const FileType: IFileTypes = {
    Pdf: "pdf",
    Image: "image"
};

const Page = ({ slug }: { slug: string | undefined }) => {
  //const [story, setStory] = useState<PageStoryblok>();

  const story = useStoryblok(slug!, { version: "draft" });

  // useEffect(() => {
  //   if (slug) {
  //     fetchStory(slug)
  //       .then((response) => {
  //         setStory(response.data.story as PageStoryblok);
  //       })
  //       .catch((error) => console.error(error));
  //   }
  // }, [slug]);

  const renderBody = () => {

    if (!story || !story.content) {
      return <React.Fragment />;
    }

    const storyContent = story?.content;
    const fileItems = storyContent.related_downloads?.filter((fileItem: FileItemStoryblok) => {
      return fileItem.component == "file_item";
    });

    const fileItemComponents = renderFileItems(fileItems || []);

    return (
      <div {...storyblokEditable(story.content)}>
        <Row className="mt-5 mb-5">
          <h1 className="display-1 text-center">
            <strong>{story.content.title}</strong>
          </h1>
        </Row>
        <Row>
          <span className="border">
            {parse(renderRichText(storyContent.richtext))}
          </span>
        </Row>
        <Row className="py-3">
          <div className="d-flex flex-row">
            {fileItemComponents}
          </div>
        </Row>
      </div>
    );
  };

  const renderFileItems = (fileItems: FileItemStoryblok[]) => {  
    return fileItems.map((fileItem: FileItemStoryblok) => {
      return <StoryblokComponent blok={fileItem} key={fileItem._uid} />
    });
  };

  const renderLoading = () => <p>Loading...</p>;

  return story && story.content ? renderBody() : renderLoading();
};

export default Page;
