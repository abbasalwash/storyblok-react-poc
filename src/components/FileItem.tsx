export interface FileItemProps {
    type: string,
    file: string // must be a content type from Storyblok
}

export const FileItem = (props: FileItemProps) => {

    // get data of file asset, like file size (content-length)
    // render file item layout block

    return (
        <div>
            <img src={"ergens een icon van via props.type"} />
            <h1>{"props.file.title"} {"file size"}</h1>
            <a href={"props.file.url"} className="button-link download">Download</a>
        </div>
    );
}