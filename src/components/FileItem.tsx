import { storyblokEditable } from "@storyblok/react";
import { FileItem } from '../bng_components/FileItem'
import { FileItemStoryblok } from '../interfaces/component-types-sb'

const FileItemComponent = ({ blok }: FileItemStoryblok) => {
    return (
        <FileItem {...storyblokEditable(blok)}
            title={blok.file.title || ""}
            helpDescription={blok.file.alt}
            fileSizeInBytes='2400'
            url={blok.file.filename} />
    );
};
   
export default FileItemComponent;