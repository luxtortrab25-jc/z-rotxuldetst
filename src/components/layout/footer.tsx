export default function Footer() {
  return (
    <footer className="w-full bg-card">
      <div className="container flex h-16 items-center justify-center">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Luxtor Detail Studios. Todos los derechos reservados.
        </p>
      <div className="container flex h-24 flex-col items-center justify-center py-4">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()}  Este sitio web pertenece a Raquel Juárez Ugalde.
        </p>
      </div>
    </footer>
  );
}
