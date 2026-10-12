import './App.css'
import {ProjectList} from "./components/ProjectList.tsx";
import {Guestbook} from "./components/Guestbook.tsx";

function App() {
  return (
      <div className="app-container" style={{maxWidth: '800px', margin: '0 auto', padding: '2rem'}}>
        <header>
          <h1>Developer Portfolio</h1>
          <p>Welcome to my interactive portfolio, powered by React, Spring Boot, and Docker.</p>
        </header>

        <main>
          <ProjectList/>
          <Guestbook/>
        </main>
      </div>
  )
}

export default App
