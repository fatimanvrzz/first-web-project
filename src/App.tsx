import { Routes, Route, BrowserRouter } from 'react-router-dom';
import IndexPage from './pages';
import React, { ReactElement } from 'react';
import AppHeader from './components/AppHeader';

const routes: { Path: string, Element: ReactElement }[] = [
  {
    Path: "/",
    Element: <IndexPage />
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
