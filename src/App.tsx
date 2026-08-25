import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { TShirtServicePage } from './pages/TShirtServicePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { NewsPage } from './pages/NewsPage';
import { QuotePage } from './pages/QuotePage';
import { ContactPage } from './pages/ContactPage';
import { PoliciesPage } from './pages/PoliciesPage';
import { CareersPage } from './pages/CareersPage';
import { NotFoundPage } from './pages/NotFoundPage';

const PageContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Normalize path without trailing slash
  const path = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');

  if (path === '' || path === '/') {
    return <HomePage />;
  }

  if (path === '/dich-vu') {
    return <ServicesPage />;
  }

  if (path === '/dich-vu/may-ao-thun') {
    return <TShirtServicePage />;
  }

  if (path === '/du-an') {
    return <ProjectsPage />;
  }

  if (path === '/du-an/bst-ao-thun-local-brand') {
    return <CaseStudyPage />;
  }

  if (path === '/tin-tuc' || path.startsWith('/tin-tuc/')) {
    return <NewsPage />;
  }

  if (path === '/bao-gia' || path === '/nhan-bao-gia') {
    return <QuotePage />;
  }

  if (path === '/lien-he') {
    return <ContactPage />;
  }

  if (path === '/chinh-sach') {
    return <PoliciesPage />;
  }

  if (path === '/tuyen-dung') {
    return <CareersPage />;
  }

  // 404 Fallback
  return <NotFoundPage />;
};

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-900 selection:text-white">
        <Header />
        <main className="flex-grow">
          <PageContent />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}
