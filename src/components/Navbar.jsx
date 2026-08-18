function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 pt-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 rounded-2xl bg-slate-950/80 backdrop-blur-lg border border-slate-800 shadow-lg">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition"
        >
          Kamali
        </a>

        {/* Navigation */}
        <ul className="flex gap-6 md:gap-8 text-gray-300">

          <li>
            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;