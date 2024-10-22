import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function reverseSentence(sentence) {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .replace(/^\w/, (c) => c.toUpperCase());
}

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                style={{ width: '100%', height: '200px', marginBottom: '20px' }}
            />
            <div style={{ width: '100%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{reverseSentence(markdown)}</ReactMarkdown>
            </div>
        </div>
    );
}