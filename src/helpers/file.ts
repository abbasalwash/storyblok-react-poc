const sizes = Array<FilesizeTypes>("Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB");
const k = 1024;

type FilesizeTypes =
    "Bytes" |
    "KB" |
    "MB" |
    "GB" |
    "TB" |
    "PB" |
    "EB" |
    "ZB" |
    "YB";

export function formatFileSizeFromBytes(bytes: number, decimals = 2): string {

    if (!bytes || bytes === 0) {
        return "0 Bytes";
    }
    
    const dm = decimals < 0 ? 0 : decimals;
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + "" + sizes[i];
}