export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-white/60">
        © {new Date().getFullYear()} Myriam Chamakh — Built with Next.js
      </div>
    </footer>
  );
}
