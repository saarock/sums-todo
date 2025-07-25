// DesktopNav.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import Button from "../Button/Button";
import type { HeaderProps } from "../../types";

interface DesktopNavProps {
  navItems: HeaderProps["navItems"];        // Navigation items: array of objects with path, label, icon
  isDark: boolean;                          // Current theme state: dark mode or not
  toggleDarkMode: () => void;               // Function to toggle dark/light theme
}

/**
 * DesktopNav Component
 *
 * Renders the navigation links for desktop screens.
 * Highlights the active link based on the current URL path.
 * Includes a theme toggle button that switches between dark and light mode.
 */
const DesktopNav: React.FC<DesktopNavProps> = ({ navItems, isDark, toggleDarkMode }) => {
  // Hook to get current location for active link styling
  const location = useLocation();

  return (
    <nav className="desktop-nav">
      {/* Render each navigation item as a Link */}
      {navItems?.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-link ${location.pathname === item.path ? "nav-link-active" : ""}`}
        >
          {/* Optional icon displayed before the label */}
          {item.icon && <span className="nav-icon">{item.icon}</span>}
          {item.label}
        </Link>
      ))}

      {/* Theme toggle button for switching between dark and light mode */}
      <Button
        onClick={toggleDarkMode}
        className="theme-toggle"
        aria-label="Toggle Dark Mode"
      >
        <div className="theme-icon-wrapper">
          {isDark ? (
            <Sun className="theme-icon sun-icon" />
          ) : (
            <Moon className="theme-icon moon-icon" />
          )}
        </div>
      </Button>
    </nav>
  );
};

export default DesktopNav;
