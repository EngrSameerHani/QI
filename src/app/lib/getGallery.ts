const baseUrl = process.env.NEXT_PUBLIC_WP_API_URL as string;

if (!baseUrl) {
  throw new Error("NEXT_PUBLIC_WP_API_URL is not defined in .env");
}

/* ===============================
   Fetch All Galleries
================================= */
export const getGalleries = async () => {
  try {
    const res = await fetch(
      `${baseUrl}/5cript-gallery/v1/galleries`,
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch galleries");
    }

    return await res.json();
  } catch (error) {
    console.error("getGalleries error:", error);
    return [];
  }
};

/* ===============================
   Fetch Single Gallery Images
================================= */
export const getGalleryById = async (id: number) => {
  try {
    const res = await fetch(
      `${baseUrl}/5cript-gallery/v1/gallery/${id}/images`,
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch gallery images");
    }

    return await res.json();
  } catch (error) {
    console.error("getGalleryById error:", error);
    return [];
  }
};