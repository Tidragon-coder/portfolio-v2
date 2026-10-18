import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Théo Spetebroot';
const SITE_URL = 'https://theo-spetebroot.com';

// Met à jour le titre de l'onglet et l'URL canonique de la page courante
const usePageTitle = (title?: string) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Développeur Full-Stack`;

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      canonical.href = `${SITE_URL}${pathname}`;
    }
  }, [title, pathname]);
};

export default usePageTitle;
