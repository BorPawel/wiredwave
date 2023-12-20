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
      name: "category",
      title: "Category",
      type: "string",
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
      name: "shortDesc",
      title: "Short Description",
      type: "string",
    },
    {
      name: "longDesc",
      title: "Long Description",
      type: "string",
    },
    {
      name: "multipleDesc",
      title: 'Description with Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'header',
              title: 'Section Header',
              type: 'string'
            },
            {
              name: 'sectionDesc',
              title: 'Section Description',
              type: 'string'
            },
            
          ]
        }

      ]
    },
    {
      name: "connector",
      title: "Connector",
      type: "string",
    },
    {
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "bluetooth",
      title: "Bluetooth",
      type: "number",
    },
    {
      name: "batteryLife",
      title: "Battery Life",
      type: "number",
    },
    {
      name: "driverSize",
      title: "Audio Driver Size",
      type: "string",
    },

    {
      name: "soundQuality",
      title: "Sound Quality",
      type: "string",
    },
    {
      name: "noiseCancel",
      title: "Noise Cancellation",
      type: "string",
    },
    {
      name: "portability",
      title: "Portability",
      type: "string",
    },
    {
      name: "comfort",
      title: "Comfort",
      type: "string",
    },
    {
      name: "micro",
      title: "Microphone",
      type: "string",
    },
    {
      name: "controls",
      title: "Controls",
      type: "string",
    },
    {
      name: "chargingTime",
      title: "Charging Time",
      type: "string",
    },
    {
      name: "durability",
      title: "Durability",
      type: "string",
    },
    {
      name: "freq",
      title: "Headphone frequency response",
      type: "string",
    },
    {
      name: "sale",
      title: "Sale",
      type: "boolean",
    },
    {
      name: 'hot',
      title: 'Hot',
      type: 'boolean'
    },
  ],
};
