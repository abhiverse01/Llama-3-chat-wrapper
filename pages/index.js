import { useState } from 'react';

export default function Home() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState([]);

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
        setResponse([...response, { user: input, bot: data }]);
        setInput('');
    };

    return (
        <div className="chat-container">
            <h1>Llama 3 Chat Interface</h1>
            <div className="chat-box">
                <div className="chat-response">
                    {response.map((res, index) => (
                        <div key={index}>
                            <p><strong>You:</strong> {res.user}</p>
                            <p><strong>Bot:</strong> {res.bot}</p>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="chat-form">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        rows="3"
                        placeholder="Type your query here..."
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
