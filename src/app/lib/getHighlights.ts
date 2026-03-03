const baseUrl = process.env.NEXT_PUBLIC_WP_API_URL as string;

// Fetch latest highlights
export const getHighlights = async () => {
    try {
        const res = await fetch(`${baseUrl}/wp/v2/posts?categories=2&per_page=10&order=desc&orderby=date&_fields=id,title,content,featured_media,featured_media_src_url`, {
            cache: 'no-cache',
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        });

        if (!res.ok) throw new Error('Failed to fetch highlights');
        return await res.json();
    } catch (error) {
        console.error('getHighlights error:', error);
        return null;
    }
};

// Fetch highlight by ID
export const getHighlightsById = async (id: number) => {
    try {
        const res = await fetch(`${baseUrl}/wp/v2/posts/${id}`, {
            cache: 'no-cache',
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        });

        if (!res.ok) throw new Error('Failed to fetch highlight by id');
        return await res.json();
    } catch (error) {
        console.error('getHighlightsById error:', error);
        return null;
    }
};