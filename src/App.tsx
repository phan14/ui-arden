import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TShirtServicePage } from './pages/TShirtServicePage';
import { ShirtServicePage } from './pages/ShirtServicePage';
import { PantsServicePage } from './pages/PantsServicePage';
import { JacketServicePage } from './pages/JacketServicePage';
import { FabricGuidePage } from './pages/FabricGuidePage';
import { TechpackGuidePage } from './pages/TechpackGuidePage';
import { ManufacturingPage } from './pages/ManufacturingPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { CategoryPage } from './pages/CategoryPage';
import { SearchPage } from './pages/SearchPage';
import { FAQPage } from './pages/FAQPage';
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

  // 1. Home
  if (path === '' || path === '/') {
    return <HomePage />;
  }

  // 2. About
  if (path === '/gioi-thieu' || path === '/ve-chung-toi') {
    return <AboutPage />;
  }

  // 3. Services Hub
  if (path === '/dich-vu') {
    return <ServicesPage />;
  }

  // 4. Service Detail: T-Shirt
  if (path === '/dich-vu/may-ao-thun' || path === '/dich-vu/ao-thun') {
    return <TShirtServicePage />;
  }

  // 4b. Service Detail: Shirt
  if (path === '/dich-vu/may-ao-so-mi' || path === '/dich-vu/so-mi') {
    return <ShirtServicePage />;
  }

  // 4c. Service Detail: Pants
  if (path === '/dich-vu/may-quan' || path === '/dich-vu/quan') {
    return <PantsServicePage />;
  }

  // 4d. Service Detail: Jacket / Hoodie
  if (path === '/dich-vu/may-ao-khoac' || path === '/dich-vu/ao-khoac') {
    return <JacketServicePage />;
  }

  // 4e. Fabric Guide & GSM Table
  if (path === '/bang-vai' || path === '/kien-thuc-vai') {
    return <FabricGuidePage />;
  }

  // 4f. Techpack Guide & Sampling Process
  if (path === '/huong-dan-techpack' || path === '/quy-trinh-may-mau') {
    return <TechpackGuidePage />;
  }

  // 5. Manufacturing / Factory Landing Page
  if (path === '/nang-luc-san-xuat' || path === '/xuong-may') {
    return <ManufacturingPage />;
  }

  // 6. Portfolio Hub
  if (path === '/du-an') {
    return <ProjectsPage />;
  }

  // 7. Case Study / Single Project
  if (path === '/du-an/bst-ao-thun-local-brand' || path.startsWith('/du-an/')) {
    return <CaseStudyPage />;
  }

  // 8. Category Archive
  if (path.startsWith('/chuyen-muc')) {
    return <CategoryPage />;
  }

  // 9. Search Page
  if (path === '/tim-kiem') {
    return <SearchPage />;
  }

  // 10. FAQ Page
  if (path === '/faq' || path === '/hoi-dap') {
    return <FAQPage />;
  }

  // 11. Blog Archive & Single Post
  if (path === '/tin-tuc' || path.startsWith('/tin-tuc/')) {
    return <NewsPage />;
  }

  // 12. Quote Page
  if (path === '/bao-gia' || path === '/nhan-bao-gia') {
    return <QuotePage />;
  }

  // 13. Contact Page
  if (path === '/lien-he') {
    return <ContactPage />;
  }

  // 14. Policies Page
  if (path === '/chinh-sach') {
    return <PoliciesPage />;
  }

  // 15. Careers Page
  if (path === '/tuyen-dung') {
    return <CareersPage />;
  }

  // 16. 404 Fallback
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
