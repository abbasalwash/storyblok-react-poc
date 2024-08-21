import { getStoryblokApi, ISbStoriesParams, StoryblokClient } from "@storyblok/react";

export const fetchStories = (story: string) => {
    let sbStoriesParams: ISbStoriesParams = { version: "draft" };
    const storyblokApi: StoryblokClient = getStoryblokApi();
    return storyblokApi
        .get(`cdn/stories/${story}`, sbStoriesParams);
        
};