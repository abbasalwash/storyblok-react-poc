import {
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokClient,
} from "@storyblok/react";

export const fetchStory = (slug: string) => {
  let sbStoriesParams: ISbStoriesParams = { version: "draft" };
  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/${slug}`, sbStoriesParams);
};
