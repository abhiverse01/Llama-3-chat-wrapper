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
        <div className="chat-wrapper">
            <div className="side-panel">
                <div className="side-panel-content">
                    <h2>Navigation</h2>
                    <button className="collapse-button">Collapse</button>
                </div>
            </div>
            <div className="main-chat">
                <header className="chat-header">
                    <h1>Chatbot</h1>
                    <div className="icons">
                        <i className="icon-settings">⚙️</i>
                        <i className="icon-notifications">🔔</i>
                    </div>
                </header>
                <div className="chat-container">
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
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
