

export const colorImageArray = {
    name: 'colorImageArray',
    title: 'Color and Image Array',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          {
            name: 'color',
            title: 'Color',
            type: 'color', // You can also use 'color' type if you have the color input plugin
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ],
        preview: {
          select: {
            title: 'color.hex',
            media: 'image',
          },
        },
      },
    ],
  };