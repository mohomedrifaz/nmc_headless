// lib/fetch.ts
export async function fetchFromWP(endpoint: string) {
    const res = await fetch(`http://test.local/wp-json/wp/v2/${endpoint}`, {
        next: { revalidate: 60 }, // or 'force-cache' if totally static
    });

    if (!res.ok) {
        throw new Error('Failed to fetch WordPress content');
    }

    return res.json();
}
