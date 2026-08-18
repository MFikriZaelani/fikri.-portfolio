export default function Footer({ logo = "fikri." }: { logo?: string }) {
  const year = new Date().getFullYear();

  return (
    <footer>
      copyright © {year} {logo} — All rights reserved.
    </footer>
  );
}
