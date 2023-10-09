export default {
  name: "saleBanner",
  title: "Sale Banner",
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
        dateFormat: "MM-DD",
      }
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
      options: {
        dateFormat: "MM-DD"
      }
    },
    {
        name: 'saleName',
        title: 'Sale Name',
        type: 'string',
        
    }
  ],
};
