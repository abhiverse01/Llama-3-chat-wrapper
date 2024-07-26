import { useState } from 'react';
// Remove the CSS import here
// import '../public/styles/main.css';

export default function Home() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/inference', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ inputs: input }),
        });
        const data = await res.json();
        setResponse(data);
    };

    return (
        <div className="chat-container">
            <h1>Llama 3 Chat Interface</h1>
            <div className="chat-box">
                <form onSubmit={handleSubmit} className="chat-form">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        rows="5"
                        cols="50"
                        placeholder="Type your query here..."
                    ></textarea>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                {response && (
                    <div className="chat-response">
                        <h2>Response:</h2>
                        <pre>{JSON.stringify(response, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
}
