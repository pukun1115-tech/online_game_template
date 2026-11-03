export const PORT = Number(process.env.PORT ?? 3000);
export const isLocal = (process.env.PORT === undefined);
export const __dirname = import.meta.dirname;
export const MYME_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".png": "image/png",
    ".ico": "image/x-icon",
};
