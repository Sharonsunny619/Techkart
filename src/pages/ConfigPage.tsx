import { useLocation } from 'react-router-dom';
import { useConfigContext } from '../context/ConfigContext';
import { SectionResolver } from '../components/SectionResolver';

export function ConfigPage() {
  const { pathname } = useLocation();
  const { getPageConfig } = useConfigContext();
  const page = getPageConfig(pathname);

  if (!page) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>404</h1>
        <p>Page not found.</p>
      </div>
    );
  }

  return <SectionResolver sections={page.sections} />;
}
