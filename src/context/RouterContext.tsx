import React, { createContext, useContext, useState, useEffect } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
  searchParams: URLSearchParams;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
  searchParams: new URLSearchParams(),
});

export const useRouter = () => useContext(RouterContext);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [searchParams, setSearchParams] = useState<URLSearchParams>(() => {
    if (typeof window !== 'undefined') {
      return new URLSearchParams(window.location.search);
    }
    return new URLSearchParams();
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      setSearchParams(new URLSearchParams(window.location.search));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path.startsWith('#')) {
      const el = document.querySelector(path);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const [pathname, search] = path.split('?');
    if (window.location.pathname !== pathname || window.location.search !== (search ? `?${search}` : '')) {
      window.history.pushState({}, '', path);
      setCurrentPath(pathname || '/');
      setSearchParams(new URLSearchParams(search || ''));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate, searchParams }}>
      {children}
    </RouterContext.Provider>
  );
};

export const Link: React.FC<{
  href: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
  title?: string;
}> = ({ href, children, className, id, onClick, title }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return; // Standard external link
    }
    e.preventDefault();
    if (onClick) onClick();
    navigate(href);
  };

  return (
    <a
      id={id}
      href={href}
      onClick={handleClick}
      className={className}
      title={title}
    >
      {children}
    </a>
  );
};
