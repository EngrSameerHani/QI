const baseUrl = process.env.NEXT_PUBLIC_WP_API_URL as string;

// Fetch all galleries
export const getGalleries = async () => {
    try {
        const res = await fetch(`${baseUrl}/5cript-gallery/v1/galleries`, {
            cache: 'no-cache',
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        });

        if (!res.ok) throw new Error('Failed to fetch galleries');
        return await res.json();
    } catch (error) {
        console.error('getGalleries error:', error);
        return null;
    }
};

// Fetch gallery images by gallery ID
export const getGallery = async (id: number) => {
    try {
        const res = await fetch(`${baseUrl}/5cript-gallery/v1/gallery/${id}/images`, {
            cache: 'no-cache',
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        });

        if (!res.ok) throw new Error('Failed to fetch gallery images');
        return await res.json();
    } catch (error) {
        console.error('getGallery error:', error);
        return null;
    }
};