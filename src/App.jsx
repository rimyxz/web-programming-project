function App() {
  return (
    <div className="app px-8 py-6">
      {/* Website title and theme button */}
      <div className="flex items-center justify-between">
        {/* Website title */}
        <h1 className="site-title text-2xl font-bold">StudyBase</h1>

        <button
          id="theme_toggler"
          type="button"
          className="theme-button rounded-full px-5 py-2 text-sm font-medium"
        >
          Change Your Theme
        </button>
      </div>

      {/* Navigation menu */}
      <nav>
        <ul className="flex flex-wrap gap-6 py-4">
          <li>
            <a href="#" className="nav-link">Home</a>
          </li>
          <li>
            <a href="#" className="nav-link">Login</a>
          </li>
          <li>
            <a href="#" className="nav-link">Create an account</a>
          </li>
          <li>
            <a href="#" className="nav-link">Dashboard</a>
          </li>
          <li>
            <a href="#" className="nav-link">Courses</a>
          </li>
          <li>
            <a href="#" className="nav-link">Assignments</a>
          </li>
          <li>
            <a href="#" className="nav-link">Exams/Quizzes</a>
          </li>
          <li>
            <a href="#" className="nav-link">Notes and Resources</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;