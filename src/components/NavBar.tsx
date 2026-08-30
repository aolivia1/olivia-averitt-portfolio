import { useState } from "react";
function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return( 
        <nav>

            <div className="desktop-menu">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#resume">Resume</a>
                <a href="#contact">Contact</a> 
            </div>
            
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                className = "mobile-menu-button"
                >
              {isMenuOpen ? "✕" : "☰"} 
            </button>
            {isMenuOpen && 
                <div className="mobile-menu">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#resume">Resume</a>
                <a href="#contact">Contact</a>
                </div>
            }
            

            
        </nav>
    );
}

export default NavBar;