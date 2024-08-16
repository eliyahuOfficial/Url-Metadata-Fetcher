import axios from 'axios';

export const fetchMetadata = async (urls: string[]) => {
    const metadata = [];

    for (const url of urls) {
        try {
            const response = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
            const data = response.data.contents;

            const titleMatch = data.match(/<title>(.*?)<\/title>/);
            const descriptionMatch = data.match(/<meta name="description" content="(.*?)"/) ||
                data.match(/<meta property="og:description" content="(.*?)"/) ||
                data.match(/<meta name="twitter:description" content="(.*?)"/);
            const imageMatch = data.match(/<meta property="og:image" content="(.*?)"/) ||
                data.match(/<meta name="twitter:image" content="(.*?)"/) ||
                data.match(/<link rel="image_src" href="(.*?)"/);

            metadata.push({
                url,
                title: titleMatch ? titleMatch[1] : 'No title found',
                description: descriptionMatch ? descriptionMatch[1] : 'No description found',
                image: imageMatch ? imageMatch[1] : 'https://via.placeholder.com/150',
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {

                console.error(`Error fetching data from ${url}:`, error.message);
            } else if (error instanceof Error) {

                console.error(`Error fetching data from ${url}:`, error.message);
            } else {
                console.error(`Unexpected error:`, error);
            }
            metadata.push({
                url,
                title: 'Error fetching data',
                description: '',
                image: 'https://via.placeholder.com/150',
            });
        }
    }

    return metadata;
};
