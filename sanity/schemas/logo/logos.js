export default {
  name: "logos",
  title: "Logos",
  type: "document",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "image",

      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Company Name",
      type: "string",
    },
  ],
};
