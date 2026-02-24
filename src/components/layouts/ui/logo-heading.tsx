export default function LogoHeading() {
  return (
    <a href="/">
      <nav className="flex flex-row items-center justify-center group">
        <img
          src="/logo.svg"
          alt="Lordly Logo"
          className="w-auto h-[8vh] aspect-square"
        />
        <h2 className="font-logo text-xl hidden sm:block group-hover:text-highlight">
          Parker&apos;s Digital Domain
        </h2>
      </nav>
    </a>
  );
}
