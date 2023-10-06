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
        name: 'name',
        title: 'Name',
        type:'string',
    },
    {
        name: 'smallText',
        title: 'SmallText',
        type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
          source: 'name',
          maxLength: 90
      }
      
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',

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
