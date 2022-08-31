import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Layout/Header';

import Sidebar from './components/Layout/Sidebar';
import ContentContainer from './components/Layout/ContentContainer';
import OverviewPage from './pages/overview';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import './styles/styles.scss';
import CategoryPage from './pages/category';
import SettingsPage from './pages/settings';
import Footer from './components/Layout/Footer';
import BlogPage from './pages/blog';
import NewsPage from './pages/news';
import TermsOfUsePage from './pages/terms';
import DesktopNavigation from './components/Navigation/DesktopNavigation';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <div className="et-app">
          <Header />
          <DesktopNavigation />
          <div className="et-body">
            <div className="et-body__center">
              {/* <Sidebar /> */}
              <ContentContainer>
                <Routes>
                  <Route path="/" element={<OverviewPage />}></Route>

                  <Route path="/blog" element={<BlogPage />}></Route>
                  <Route path="/terms" element={<TermsOfUsePage />}></Route>
                  <Route path="/news" element={<NewsPage />}></Route>
                  <Route path="/contact" element={<ContactPage />}></Route>
                  <Route path="/about" element={<AboutPage />}></Route>
                  <Route path="/category" element={<CategoryPage />}></Route>
                  <Route path="/settings" element={<SettingsPage />}></Route>
                </Routes>
              </ContentContainer>
            </div>
          </div>
          <Footer />
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
