import clsx from "clsx";

export const Breadcrumb = ({ children, className }) => {
  return <nav className={clsx("flex", className)} aria-label="breadcrumb">{children}</nav>;
};

export const BreadcrumbList = ({ children, className }) => {
  return <ol className={clsx("flex space-x-3", className)}>{children}</ol>;
};

export const BreadcrumbItem = ({ children, className }) => {
  return <li className={clsx("flex items-center", className)}>{children}</li>;
};

export const BreadcrumbLink = ({ href, children, disabled, className }) => {
  return (
    <a href={disabled ? undefined : href} className={`${disabled ? 'text-black cursor-default' : clsx('text-text-2 hover:underline cursor-pointer', className)}`} aria-disabled={disabled}>
      {children}
    </a>
  );
};

export const BreadcrumbSeparator = () => {
  return <span className="text-gray-500 text-sm flex items-center">/</span>;
};

export const BreadcrumbPage = ({ children }) => {
  return <span className="text-gray-700 font-medium">{children}</span>;
};
