//constructs the absolute path for an image given its relative path
export const getImageUrl = (path) => {
    return new URL(`assets/${path}`, import.meta.url).href;
};
