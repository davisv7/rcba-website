export const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg text-foreground mb-1">
              Rutherford County Beekeepers Association
            </h3>
            <p className="text-sm text-muted-foreground">
              Supporting local beekeepers and pollinators since our founding
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RCBA. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
