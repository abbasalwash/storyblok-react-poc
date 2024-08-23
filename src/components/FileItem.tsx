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
        // <div className="d-flex flex-row border py-2 pe-2 shadow-sm rounded" {...storyblokEditable(blok)}>
        //     <img src="/assets/icons/pdf-file-icon.svg" alt={blok.file.alt} />
        //     <div>
        //         <strong>{blok.file.title}</strong>
        //         <div>800 bytes</div>
        //         <a href={blok.file.filename} target="_blank" className="button-link download">Download</a>
        //     </div>
        // </div>
    );
};
   
export default FileItemComponent;