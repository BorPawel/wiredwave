export default {
  name: "banner",
  title: "Banner",
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
        name: 'product',
        title: 'Product',
        type:'string',
    },
    {
        name: 'smallText',
        title: 'SmallText',
        type: 'string'
    },
    {
        name: 'bigText',
        title: 'BigText',
        type: 'string'
    },
    {
        name: 'desc',
        title: 'Desc',
        type: 'string'
    },
    {
        name: 'buttonText',
        title: 'ButtonText',
        type: 'string'
    }
  ],
};
