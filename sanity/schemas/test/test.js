import { category } from "../lib/category";
import { specs } from "../lib/specs/specs";
import { colorImageArray } from "../lib/colors/colors";
import { desc } from "../lib/desc/desc";


export default {
    name: 'test',
    title: 'Test',
    type: 'document',
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
        title: 'Headphones Name',
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
      category, // The category field
      colorImageArray,
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
      desc,
        specs //specifications
 
    ],
  };