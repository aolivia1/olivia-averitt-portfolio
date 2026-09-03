function About() {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="user-profile">
        <h3>&gt; USER_PROFILE</h3>
        <p>
          <strong className="profile-label">NAME</strong> → Olivia Averitt
          <br /> 
          <strong className="profile-label">MAJOR</strong> → Electrical Engineering
          <br /> 
          <strong className="profile-label">YEAR</strong> → Sophomore
          <br /> 
          <strong className="profile-label">MINOR</strong> → Music Production & Technology
        </p>
        <h3>&gt; INTERESTS</h3>
        <p>
          Audio Systems <br />
          Creative Technology <br />
        </p>
        <h3>&gt; PERSONAL</h3>
        <p>
          Reading <br />
          Nail Art <br />
          Crochet <br />
        </p>
      </div>

      <div className="personal-projects">
        <h3>&gt; PERSONAL_PROJECTS</h3>
        <p>
          I'm drawn to projects that let me combine engineering with creativity. 
          I'm always looking for new ways to challenge myself and learn something outside
          of the classroom.
        </p>
      </div>

      <div className="project-preview">
        <p>
          <h3><strong>[01]</strong> COMPUTER FROM SCRATCH <br /></h3>
          <a>Build a basic computer from the ground up using Verilog.</a> <br/></p>
      </div>

      <div className="project-preview">
        <p>
          <h3><strong>[02]</strong> SMART DISPLAY MIRROR <br /></h3>
          <a>Build an interactive display behind a two-way mirror.</a> <br />
        </p>
      </div>

      <div className="project-preview">
        <p>
          <h3><strong>[03]</strong> CYBER DECK <br /></h3>
          <a>Build a portable, customized computer with a Raspberry Pi for music and coding projects.</a>
        </p>
      </div>
       

      <a href="#footer" className="about-button">
        VIEW SYSTEM INFO
      </a>
    </section>
  );
}

export default About;