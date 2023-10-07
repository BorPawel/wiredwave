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
    {
        name: 'shortDesc',
        title: 'Short Description',
        type: 'string'
    },
    {
        name: 'longDesc',
        title: 'Long Description',
        type: 'string'
    },
    {
        name: "bluetooth",
        title: "Bluetooth",
        type: "number",

      },
      {
        name: 'connector',
        title: 'Connector',
        type: 'string'
    },
      {
        name: 'colors',
        title: 'Colors',
        type:'array',
        of: [{ type: "string" }],
      },
      {
        name: 'batteryLife',
        title: 'Battery Life',
        type: 'number'
      },
      {
        name: 'chargingTime',
        title: 'Charging Time',
        type: 'number'
      },
      {
        name: 'micro',
        title: 'Microphone',
        type: 'string'
      },
      {
        name: 'freq',
        title: 'Headphone frequency response',
        type: 'string'
      }
  ],
};
