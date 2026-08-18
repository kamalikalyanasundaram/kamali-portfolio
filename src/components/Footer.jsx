function Footer() {
  return (
    <footer className="border-t border-cyan-400/10 bg-slate-950/50 backdrop-blur-md mt-20">
      <div className="max-w-6xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center">

        <h2 className="text-cyan-400 font-bold text-xl">
          Kamali
        </h2>

        <p className="text-gray-400 text-sm mt-3 md:mt-0">
          Built with React & Tailwind CSS
        </p>

        <p className="text-gray-400 text-sm mt-3 md:mt-0">
          © 2026 Kamali. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
