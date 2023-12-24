export const specs = {
    name: 'specs',
    title: 'Headphones Specifications',
    type: 'object',
    fields: [
      {
        name: 'specifications',
        title: 'Specifications',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'specName',
                title: 'Specification Name',
                type: 'string'
              },
              {
                name: 'specValue',
                title: 'Specification Value',
                type: 'string'
              }
            ]
          }
        ]
      }
    ],
 
  };
  