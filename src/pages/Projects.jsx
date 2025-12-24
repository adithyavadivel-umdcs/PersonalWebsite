import "../styles/page.css";

export default function Projects() {
  return (
    <section className="section">
      <div className="section-title">
        <h2>Projects</h2>
        
      </div>

      <div className="grid3">
  {/* Project 1 */}
  <article className="item hoverlift">
    <h3>Tic-Tac-Toe Game (Java Swing)</h3>
    <p>
      Developed a fully functional Tic-Tac-Toe game using Java Swing, featuring
      a graphical user interface, turn-based logic, and win-condition detection.
      Focused on clean object-oriented design and event-driven programming.
    </p>
    <div className="meta">
      <span className="pill">Java</span>
      <span className="pill">Swing</span>
      <span className="pill">OOP</span>
      <span className="pill">GUI</span>
    </div>
  </article>

  {/* Project 2 */}
  <article className="item hoverlift">
    <h3>Array & Data Processing Utilities (CMSC 131)</h3>
    <p>
      Implemented a series of Java programs to manipulate arrays and
      multi-dimensional data structures, including copying, filtering,
      and aggregating values. Emphasized correctness, efficiency, and
      edge-case handling.
    </p>
    <div className="meta">
      <span className="pill">Java</span>
      <span className="pill">Arrays</span>
      <span className="pill">Problem Solving</span>
     
    </div>
  </article>

  {/* Project 3 */}
  <article className="item hoverlift">
    <h3>Recursive Algorithms & String Processing (CMSC 131)</h3>
    <p>
      Designed and implemented recursive methods to solve problems involving
      numerical computation and string manipulation. Focused on identifying
      base cases, avoiding infinite recursion, and writing readable,
      maintainable code.
    </p>
    <div className="meta">
      <span className="pill">Java</span>
      <span className="pill">Recursion</span>
      <span className="pill">Algorithms</span>
      
    </div>

  </article>

  <article className="item hoverlift">
  <h3>Media Rental Manager (CMSC 131)</h3>
  <p>
    Designed and implemented a media rental management system that supports
    renting movies and music albums using object-oriented principles. The system
    models customers, media items, and rental plans, emphasizing clean design,
    interfaces, and polymorphism.
  </p>
  <p>
    Implemented multiple interacting classes and interfaces to manage customer
    queues, media availability, and rental constraints. Used ArrayLists as the
    core data structures and applied sorting and search operations to support
    system functionality.
  </p>
  <div className="meta">
    <span className="pill">Java</span>
    <span className="pill">OOP Design</span>
    <span className="pill">Interfaces</span>
    <span className="pill">Polymorphism</span>
    <span className="pill">Collections</span>
    
  </div>
</article>
</div>
    </section>
  );
}