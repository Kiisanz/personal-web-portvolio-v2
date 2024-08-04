export const slugify = (isTitle) => {
  return isTitle.toLocaleLowerCase().trim().replaceAll(" ", "-");
};
