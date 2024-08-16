import express from 'express';
import axios from 'axios';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(helmet());
app.use(cors());

const limiter = rateLimit({
    windowMs: 1000,
    max: 5,
});

app.use(limiter);

app.post('/fetch-metadata', async (req, res) => {
    const { urls } = req.body;

    if (!urls || urls.length === 0) {
        return res.status(400).json({ error: 'No URLs provided' });
    }

    try {
        const metadata = await Promise.all(
            urls.map(async (url: string) => {
                try {
                    const response = await axios.get(url);
                    const { data } = response;

                    const titleMatch = data.match(/<title>(.*?)<\/title>/);
                    const descriptionMatch = data.match(/<meta name="description" content="(.*?)"/) ||
                        data.match(/<meta property="og:description" content="(.*?)"/);
                    const imageMatch = data.match(/<meta property="og:image" content="(.*?)"/) ||
                        data.match(/<meta name="twitter:image" content="(.*?)"/);

                    return {
                        url,
                        title: titleMatch ? titleMatch[1] : 'No title found',
                        description: descriptionMatch ? descriptionMatch[1] : 'No description found',
                        image: imageMatch ? imageMatch[1] : 'https://via.placeholder.com/150',
                    };
                } catch (err) {
                    return {
                        url,
                        title: 'Error fetching data',
                        description: '',
                        image: 'https://via.placeholder.com/150',
                    };
                }
            })
        );

        res.json(metadata);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch metadata' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
