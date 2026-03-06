const baseUrl = process.env.NEXT_PUBLIC_WP_API_URL as string;

/* ===============================
   Get All Events
================================ */
export const getEvents = async () => {
  try {
    const res = await fetch(
      `${baseUrl}/wp/v2/posts?categories=4&per_page=10&orderby=date&order=desc&_fields=id,title,content,excerpt,featured_media,featured_media_src_url,date`,
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch events");

    return await res.json();
  } catch (error) {
    console.error("getEvents error:", error);
    return [];
  }
};

/* ===============================
   Get Event By ID
================================ */
export const getEventById = async (id: number) => {
  try {
    const res = await fetch(`${baseUrl}/wp/v2/posts/${id}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res.ok) throw new Error("Failed to fetch event");

    return await res.json();
  } catch (error) {
    console.error("getEventById error:", error);
    return null;
  }
};
