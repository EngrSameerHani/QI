const baseUrl = process.env.NEXT_PUBLIC_WP_API_URL as string;

// Fetch latest news
export const getNews = async () => {
  try {
    const res = await fetch(
      `${baseUrl}/wp/v2/posts?categories=3&per_page=10&order=desc&orderby=date&_fields=id,title,content,featured_media,featured_media_src_url,excerpt`,
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch news");
    return await res.json();
  } catch (error) {
    console.error("getNews error:", error);
    return [];
  }
};

// Fetch news by ID
export const getNewsById = async (id: number) => {
  try {
    const res = await fetch(`${baseUrl}/wp/v2/posts/${id}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res.ok) throw new Error("Failed to fetch news by id");
    return await res.json();
  } catch (error) {
    console.error("getNewsById error:", error);
    return null;
  }
};