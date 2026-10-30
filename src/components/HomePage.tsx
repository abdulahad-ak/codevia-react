function HomePage() {
  return (
    <main className="codevia">

      {/* HERO */}
      <section className="code-hero">

        <div className="hero-text">
          <div className="status">
            <span></span> BUILDING THE FUTURE
          </div>

          <h1>
            Code your
            <br />
            <strong>next idea.</strong>
          </h1>

          <p>
            A modern technology platform for developers,
            creators, and teams building meaningful digital
            experiences.
          </p>

          <div className="hero-actions">
            <button className="primary-button">
              Start Building
            </button>

            <button className="outline-button">
              View Projects ↗
            </button>
          </div>
        </div>


        <div className="code-window">

          <div className="window-top">
            <span></span>
            <span></span>
            <span></span>

            <small>main.ts</small>
          </div>

          <div className="code">
            <p><i>01</i> <b>const</b> developer = {"{"}</p>
            <p><i>02</i> &nbsp; name: <em>"Creator"</em>,</p>
            <p><i>03</i> &nbsp; skills: [</p>
            <p><i>04</i> &nbsp;&nbsp; <em>"React"</em>,</p>
            <p><i>05</i> &nbsp;&nbsp; <em>"Node.js"</em>,</p>
            <p><i>06</i> &nbsp;&nbsp; <em>"AI"</em></p>
            <p><i>07</i> &nbsp; ],</p>
            <p><i>08</i> &nbsp; <b>status</b>: <em>"building"</em></p>
            <p><i>09</i> {"}"};</p>
          </div>

        </div>

      </section>


      {/* INTRO */}
      <section className="intro">

        <div className="intro-number">
          01
        </div>

        <div>
          <span>WHAT WE DO</span>

          <h2>
            Turning complex
            <br />
            problems into <strong>simple solutions.</strong>
          </h2>
        </div>

      </section>


      {/* SERVICES */}
      <section className="services">

        <div className="service">
          <div className="service-number">01</div>

          <h3>Web Development</h3>

          <p>
            Fast, responsive and scalable applications
            built with modern technologies.
          </p>

          <a href="#">Explore →</a>
        </div>


        <div className="service">
          <div className="service-number">02</div>

          <h3>Backend Systems</h3>

          <p>
            Reliable APIs and powerful backend systems
            designed to handle real-world workloads.
          </p>

          <a href="#">Explore →</a>
        </div>


        <div className="service">
          <div className="service-number">03</div>

          <h3>Artificial Intelligence</h3>

          <p>
            Intelligent solutions that transform data
            into useful decisions and experiences.
          </p>

          <a href="#">Explore →</a>
        </div>

      </section>


      {/* TECH STACK */}
      <section className="technology">

        <div className="tech-heading">
          <span>OUR TOOLBOX</span>

          <h2>
            Built with
            <br />
            <strong>modern technology.</strong>
          </h2>
        </div>


        <div className="tech-list">

          <div>
            <strong>React</strong>
            <span>Frontend</span>
          </div>

          <div>
            <strong>Node.js</strong>
            <span>Backend</span>
          </div>

          <div>
            <strong>Python</strong>
            <span>AI / Data</span>
          </div>

          <div>
            <strong>PostgreSQL</strong>
            <span>Database</span>
          </div>

        </div>

      </section>


      {/* PROJECT */}
      <section className="project">

        <div className="project-label">
          FEATURED PROJECT / 2026
        </div>

        <div className="project-content">

          <h2>
            Build something
            <br />
            <strong>worth remembering.</strong>
          </h2>

          <p>
            Great software is not about writing more code.
            It's about solving the right problem.
          </p>

          <button className="primary-button">
            Explore Our Work ↗
          </button>

        </div>

        <div className="project-circle">
          CODE
          <br />
          VIA
        </div>

      </section>


      {/* FINAL */}
      <section className="final-section">

        <span>YOUR IDEA. OUR TECHNOLOGY.</span>

        <h2>
          Let's build
          <br />
          <strong>something different.</strong>
        </h2>

        <button className="primary-button">
          Start a Project →
        </button>

      </section>

    </main>
  );
}

export default HomePage;
