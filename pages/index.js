import React, { useState } from 'react';
import { FaCog, FaBell, FaSun, FaMoon, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Home() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Sending request to API...');
        try {
            const res = await fetch('/api/inference', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputs: input }),
            });
            console.log('Request sent, awaiting response...');
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const data = await res.json();
            console.log('Received response:', data);
            setResponse([...response, { user: input, bot: data.response }]);
            setInput('');
        } catch (error) {
            console.error('Error calling API:', error);
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <div className={`chat-wrapper ${isCollapsed ? 'collapsed' : ''} ${darkMode ? 'dark-mode' : ''}`}>
            <div className="side-panel">
                <div className="side-panel-content">
                    <h2>Navigation</h2>
                    <button className="collapse-button" onClick={() => setIsCollapsed(!isCollapsed)}>
                        {isCollapsed ? <FaArrowRight /> : <FaArrowLeft />}
                    </button>
                    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
            </div>
            <div className="main-chat">
                <header className="chat-header">
                    <h1>
                        <img src={darkMode ? "/night.png" : "/day.png"} alt="Logo" />LamChat
                    </h1>
                    <div className="icons">
                        <FaCog className="icon-settings" />
                        <FaBell className="icon-notifications" />
                    </div>
                </header>
                <div className="chat-container">
                    <div className="chat-box">
                        <div className="chat-response">
                            {response.map((res, index) => (
                                <div key={index} className="chat-message">
                                    <p><strong>You:</strong> {res.user}</p>
                                    <p><strong>Bot:</strong> {typeof res.bot === 'string' ? res.bot : JSON.stringify(res.bot)}</p>
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
