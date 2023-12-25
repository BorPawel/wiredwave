import {category} from '../lib/category'
import {specs} from '../lib/specs/specs'
import {colorImageArray} from '../lib/colors/colors'
import {desc} from '../lib/desc/desc'


export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Headphones Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    category, // The category field
    colorImageArray,
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.min(0), // Optional: Ensure price is not negative
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
      validation: (Rule) =>
        Rule.custom((discount, context) => {
          // Ensure discount is not negative
          if (discount < 0) {
            return 'Discount cannot be negative'
          }

          // Access the price field from the parent document
          const price = context.document.price

          // Check if discount is greater than price
          if (discount > price) {
            return 'Discount cannot be higher than the price'
          }

          // Return true if validation passes
          return true
        }),
    },
    {
      name: 'stars',
      title: 'Stars',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(5),
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'number',
    },
    {
      name: 'shortDesc',
      title: 'Short Description',
      type: 'string',
    },
    desc,
    specs, //specifications
  ],
};
