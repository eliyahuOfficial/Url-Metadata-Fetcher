import React, { useState } from 'react';
import axios from 'axios';

const UrlInputForm: React.FC = () => {
    const [urls, setUrls] = useState<string[]>(['']);
    const [metadata, setMetadata] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (index: number, value: string) => {
        const newUrls = [...urls];
        newUrls[index] = value;
        setUrls(newUrls);
    };

    const handleAddUrl = () => {
        setUrls([...urls, '']);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/fetch-metadata', { urls });
            setMetadata(response.data);
            setError(null);
        } catch (error) {
            setError('Error fetching metadata');
            setMetadata([]);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">URL Metadata Fetcher</h1>
            <div className="space-y-2">
                {urls.map((url, index) => (
                    <input
                        key={index}
                        value={url}
                        onChange={(e) => handleChange(index, e.target.value)}
                        placeholder="Enter URL"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                ))}
                <button
                    onClick={handleAddUrl}
                    className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Add Another URL
                </button>
                <button
                    onClick={handleSubmit}
                    className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                    Submit
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {metadata.map((meta, index) => (
                    <div key={index} className="border border-gray-300 rounded-md p-4 shadow-lg">
                        <h3 className="text-lg font-bold">{meta.title}</h3>
                        <p className="text-gray-600">{meta.description}</p>
                        {meta.image && <img src={meta.image} alt="Preview" className="mt-2 w-full h-32 object-cover rounded-md" />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UrlInputForm;
