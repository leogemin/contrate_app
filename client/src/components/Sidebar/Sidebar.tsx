import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { Button } from '../Button/Button';
import './Sidebar.scss';

export const Sidebar = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        Contrate
      </div>
      <nav className="sidebar__nav">
        <NavLink to="/" className={({ isActive }) => "sidebar__nav-link" + (isActive ? " sidebar__nav-link--active" : "")}>Home</NavLink>
        <NavLink to="/profile" className={({ isActive }) => "sidebar__nav-link" + (isActive ? " sidebar__nav-link--active" : "")}>My Profile</NavLink>
        <NavLink to="/login" className={({ isActive }) => "sidebar__nav-link" + (isActive ? " sidebar__nav-link--active" : "")}>Login</NavLink>
      </nav>
      <div className="sidebar__footer">
        <Button onClick={toggleTheme} variant="ghost">
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </div>
    </div>
  );
};
