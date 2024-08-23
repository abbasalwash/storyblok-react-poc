import { formatFileSizeFromBytes } from "../helpers/file";

export interface IFileItem {
    title: string
    helpDescription: string
    fileSizeInBytes: string
    url: string
}

export const FileItem = (props: IFileItem) => {
    const fileSize = formatFileSizeFromBytes(parseFloat(props.fileSizeInBytes));

    return (
        <div className="d-flex flex-row border py-2 pe-2 shadow-sm rounded">
            <img src="/assets/icons/pdf-file-icon.svg" alt={props.helpDescription} />
            <div>
                <strong>{props.title}</strong>
                <div>{fileSize}</div>
                <a href={props.url} target="_blank" className="button-link download">Download</a>
            </div>
        </div>
    ); 
}