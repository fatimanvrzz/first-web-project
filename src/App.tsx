import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { ReactElement } from 'react';
import AppHeader from './components/AppHeader';
import IndexPage from './pages';
import AboutUsPage from './pages/AboutUs';

const routes: { Path: string, Element: ReactElement }[] = [
  {
    Path: "/",
    Element: <IndexPage />
  },
  {
    Path: "/about",
    Element: <AboutUsPage />
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
