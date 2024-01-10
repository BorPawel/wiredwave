export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
        {
            name: 'bigImage',
            title: 'Big Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'longImage',
            title: 'Long Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'smallFirst',
            title: 'Small First Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'smallSecond',
            title: 'Small Second Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ]
}