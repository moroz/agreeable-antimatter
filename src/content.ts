import { getCollection } from "astro:content";

export async function paginatePosts(page = 1) {
  const all = (await getCollection("blog")).sort((a, b) => {
    return Number(b.data.date) - Number(a.data.date);
  });
  return all.slice((page - 1) * 20, 20);
}
