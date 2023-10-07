export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
        name: 'category',
        title: 'Category',
        type: 'string',
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "stars",
      title: "Stars",
      type: "number",
      validation: (Rule) => Rule.min(0).max(5),
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
  ],
};
