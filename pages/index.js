import { FaCog, FaBell, FaSun, FaMoon, FaArrowLeft, FaArrowRight } from 'react-icons/fa';  // Using different icons for testing

export default function Home() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

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
                    <h1><img src="/path/to/logo.png" alt="Logo" />Llama3-Chat</h1>
                    <div className="icons">
                        <FaCog className="icon-settings" />
                        <FaBell className="icon-notifications" />
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
