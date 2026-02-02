const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 md:px-6 lg:px-8 bg-background border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Dr. Shivang Patel, MD. All rights reserved.
          </p>
          <p>
            Critical Care Medicine • India, In
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
