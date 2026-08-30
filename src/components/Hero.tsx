import { useEffect, useState } from "react";

function Hero() {
  const [displayText, setDisplayText] = useState("");

  const text = "INITIALIZING_PORTFOLIO...";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index));
      index++;

      if (index > text.length) {
        clearInterval(interval);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">

        <p className="terminal-line">
          &gt; {displayText}
          <span className="cursor">_</span>
        </p>

        <h1>OLIVIA AVERITT</h1>

        <h2>
          &gt; ELECTRICAL ENGINEERING STUDENT
          
        </h2>

        <h3>
          &gt; MINOR IN MUSIC PRODUCTION & TECHNOLOGY
        </h3>

        <p className="location">
          &gt; VIRGINIA TECH
        </p>

        <p className="status">
          &gt; BUILDING SYSTEMS WHERE HARWARE, SOFTWARE, AND CREATIVITY MEET
          <span className="cursor">_</span>
        </p>

        <div className="hero-buttons">
          <a href="#projects">VIEW MY WORK</a>
          <a href="#contact">CONTACT ME</a>
        </div>

      </div>
    </section>
  );
}

export default Hero;