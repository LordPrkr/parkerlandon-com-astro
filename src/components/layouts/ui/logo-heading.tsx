export default function LogoHeading() {
  return (
    <nav aria-label="Home">
      <a href="/" className="flex flex-row items-center justify-center group">
        <img src="/logo.svg" alt="Lordly Logo" className="w-auto h-[8vh] aspect-square" />
        <h2 className="font-logo text-xl hidden sm:block group-hover:text-highlight">Parker&apos;s Digital Domain</h2>
      </a>
    </nav>
  );
}
