export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0f0f0f]/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-semibold text-lg">Sumoksha</h1>

        <div className="space-x-6 text-gray-400 text-sm">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}