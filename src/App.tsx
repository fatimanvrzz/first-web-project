import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { ReactElement } from 'react';
import IndexPage from './pages';
import AppHeader from './components/AppHeader';
import AboutUsPage from './pages/AboutUs';
import CardTestPage from './pages/CardTest';

const routes: { Path: string, Element: ReactElement }[] = [
  {
    Path: "/",
    Element: <IndexPage />
  },
  {
    Path: "/about",
    Element: <AboutUsPage />
  },
  {
    Path: "/card",
    Element: <CardTestPage />
  }
]

const App: React.FC = () => {
  return (
    <div>
      <AppHeader />
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.Path} element={route.Element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
