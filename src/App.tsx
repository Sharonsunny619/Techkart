import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProviders } from './context/AppProviders';
import { Layout } from './components/Layout';
import { ConfigPage } from './pages/ConfigPage';
import appConfig from './config/app.config';

export default function App() {
  return (
    <BrowserRouter>
      <AppProviders config={appConfig}>
        <Layout>
          <Routes>
            {appConfig.pages.map((page) => (
              <Route key={page.path} path={page.path} element={<ConfigPage />} />
            ))}
            <Route path="*" element={<ConfigPage />} />
          </Routes>
        </Layout>
      </AppProviders>
    </BrowserRouter>
  );
}
