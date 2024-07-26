# Llama3-ChatBot
<p>
        This project is an epic, minimalist chatbot interface inspired by Claude, Google's Gemini, and ChatGPT. 
        The interface is clean and modern, utilizing Google Fonts for a sleek and professional look. 
        The chat window dominates the center of the screen with rounded edges and a slight drop shadow for depth.
</p>

<h2>Features</h2>
    <ul>
        <li>Full-screen, responsive design</li>
        <li>Soft color palette with whites and light grays, accented with subtle blues</li>
        <li>Prominent input box with a send button</li>
        <li>Collapsible side panel for navigation</li>
        <li>Header with chatbot name and minimalistic icons for settings and notifications</li>
        <li>Utilizes Google Fonts for a professional look</li>
    </ul>

<h2>Installation</h2>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/yourusername/minimalist-chatbot-interface.git</code></pre>
        </li>
        <li>Navigate to the project directory:
            <pre><code>cd minimalist-chatbot-interface</code></pre>
        </li>
        <li>Install the dependencies:
            <pre><code>npm install</code></pre>
        </li>
    </ol>

<h2>Usage</h2>
    <ol>
        <li>Compile the SCSS to CSS:
            <pre><code>npm run sass</code></pre>
        </li>
        <li>Start the development server:
            <pre><code>npm run dev</code></pre>
        </li>
        <li>Open your browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a></li>
    </ol>

<h2>Deployment</h2>
    <ol>
        <li>Ensure all changes are committed and pushed to your repository:
            <pre><code>
git add .
git commit -m "Ready for deployment"
git push
            </code></pre>
        </li>
        <li>Deploy to Vercel:
            <ol>
                <li>Log in to your Vercel account.</li>
                <li>Import your GitHub repository to Vercel.</li>
                <li>Set environment variables in Vercel dashboard:
                    <ul>
                        <li>HUGGINGFACE_API_TOKEN: <em>your-huggingface-api-token</em></li>
                    </ul>
                </li>
                <li>Click "Deploy" to deploy your project.</li>
            </ol>
        </li>
    </ol>

<h2>Project Structure</h2>
<pre><code>
project/
├── api/
│   └── inference.py
├── pages/
│   └── _app.js
│   └── index.js
├── public/
│   └── styles/
│       ├── main.css
│       └── main.scss
├── .env
├── .gitignore
├── package.json
└── vercel.json
    </code></pre>

<h2>Contributing</h2>
    <p>Contributions are welcome! Please fork the repository and submit a pull request for review.</p>

<h2>License</h2>
    <p>This project is licensed under the MIT License.</p>
