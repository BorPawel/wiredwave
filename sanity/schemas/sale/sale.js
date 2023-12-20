export default {
  name: "sale",
  title: "Sale",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
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
      name: "slug",
      title: "Slug",
      type: "slug",
    },
    {
      name: "precent",
      title: "Percent Off",
      type: "string",
      validation: (Rule) => Rule.min(0).max(90),
    },
    {
      name: "startDate",
      title: "End Date",
      type: "date",
      options: {
        dateFormat: "MMM-DD",
      },
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
      options: {
        dateFormat: "MMM-DD",
      },
    },
    {
      name: "saleName",
      title: "Sale Name",
      type: "string",
    },
  ],
};
