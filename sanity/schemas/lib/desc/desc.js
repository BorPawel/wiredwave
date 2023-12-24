export const desc =  {
    name: 'longDescriptionArray',
    title: 'Long Description Array',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true, // Enables image cropping and focal point selection
            },
          },
          {
            name: 'header',
            title: 'Header',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text', // Use 'blockContent' if you want rich text capabilities
          },
        ],
        preview: {
          select: {
            title: 'header',
            subtitle: 'description',
            media: 'image',
          },
        },
      },
    ],
  };