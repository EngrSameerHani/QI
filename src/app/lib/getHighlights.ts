

// Fetch latest highlights
const baseUrl = process.env.NEXT_PUBLIC_WP_API_URL as string;

if (!baseUrl) {
  throw new Error("NEXT_PUBLIC_WP_API_URL is not defined in .env");
}

/* ===============================
   Fetch All Highlights
================================= */
export const getHighlights = async () => {
  try {
    const res = await fetch(
      `${baseUrl}/wp/v2/posts?categories=2&per_page=10&order=desc&orderby=date&_fields=id,title,content,featured_media,featured_media_src_url`,
      {
        cache: "no-store",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch highlights");
    }

    return await res.json();
  } catch (error) {
    console.error("getHighlights error:", error);
    return [];
  }
};

/* ===============================
   Fetch Highlight By ID
================================= */
export const getHighlightById = async (id: number) => {
  try {
    const res = await fetch(
      `${baseUrl}/wp/v2/posts/${id}`,
      {
        cache: "no-store",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch highlight by id");
    }

    return await res.json();
  } catch (error) {
    console.error("getHighlightById error:", error);
    return null;
  }
};