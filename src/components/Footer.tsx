const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              Built by <span className="text-foreground font-medium">Sravan Kumar</span>
            </p>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            Designed & coded with care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
