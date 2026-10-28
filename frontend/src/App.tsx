import './App.css'
import {ProjectList} from "./components/ProjectList.tsx";
import {Guestbook} from "./components/Guestbook.tsx";
import {About} from "./components/About.tsx";
import {useState} from "react";

function App() {
    const [activeTab, setActiveTab] = useState<'about' | 'portfolio' | 'guestbook'>('about');

    return (
        <div className="app-container" style={{maxWidth: '800px', margin: '0 auto', padding: '2rem'}}>
            <header style={{ marginBottom: '2rem' }}>
                <h1>Amil Zeynalli Portfolio</h1>
                <p>Welcome to my interactive portfolio, powered by React, Spring Boot, and Docker.</p>
            </header>

            <nav className="tab-navigation">
                <button
                    className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
                    onClick={() => setActiveTab('about')}
                >
                    About
                </button>
                <button
                    className={`tab-btn ${activeTab === 'portfolio' ? 'active' : ''}`}
                    onClick={() => setActiveTab('portfolio')}
                >
                    Projects
                </button>
                <button
                    className={`tab-btn ${activeTab === 'guestbook' ? 'active' : ''}`}
                    onClick={() => setActiveTab('guestbook')}
                >
                    Guestbook
                </button>
            </nav>

            <main className="tab-content">
                {activeTab === 'about' && <About />}
                {activeTab === 'portfolio' && <ProjectList />}
                {activeTab === 'guestbook' && <Guestbook />}
            </main>
        </div>
    )
}

export default App;