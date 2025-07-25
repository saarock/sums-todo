import React, { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Button from "../Button/Button";
import { useMode } from "../../hooks";
import type { HeaderProps } from "../../types";
import { defaultNavItems } from "./HeaderConstant";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import "./Header.css";
import HeaderTitle from "./HeaderTitle";

/**
 * Header Component
 *
 * A fully responsive header with:
 * - App branding (title)
 * - Desktop navigation
 * - Dark/light theme toggle
 * - Collapsible mobile navigation
 */
const Header: React.FC<HeaderProps> = ({
  title = "Task Dashboard",
  navItems = defaultNavItems,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, setIsDark } = useMode();

  /** Toggle theme and persist user preference in localStorage */
  const toggleDarkMode = () => {
    const html = document.documentElement;
    const nextTheme = isDark ? "light" : "dark";
    html.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", nextTheme);
    setIsDark(!isDark);
  };

  /** Open or close mobile menu */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* App Title Section */}
          <HeaderTitle title={title}/>

          {/* Desktop Navigation */}
          <DesktopNav
            navItems={navItems}
            isDark={isDark}
            toggleDarkMode={toggleDarkMode}
          />

          {/* Mobile Controls */}
          <div className="mobile-controls">
            {/* Theme Toggle Button (Mobile) */}
            <Button
              onClick={toggleDarkMode}
              className="theme-toggle mobile-theme-toggle"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="theme-icon" /> : <Moon className="theme-icon" />}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              onClick={toggleMobileMenu}
              className="mobile-menu-button"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="mobile-menu-icon" /> : <Menu className="mobile-menu-icon" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        navItems={navItems}
        isMobileMenuOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
