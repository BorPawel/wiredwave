import { client } from "@/sanity/lib/client";
export const getData = async (...types) => {
  try {
    const data = {};
    for (const type of types) {
      const query = `*[_type == "${type}"]`;
      data[type] = await client.fetch(query);
    }

    return data;
  } catch (error) {
    console.error("failed to fetch", error);
  }
};

export const getDataWithParams = async (params) => {
  const { slug } = params;
  try {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const product = await client.fetch(query);

    return product;
  } catch (error) {
    console.error("failed to fetch", error);
  }
};
