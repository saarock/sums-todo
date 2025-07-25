// MobileNav.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import type { HeaderProps } from "../../types";

interface MobileNavProps {
  navItems: HeaderProps["navItems"];     // Array of navigation items with path, label, optional icon
  isMobileMenuOpen: boolean;              // Boolean to control if mobile menu is visible/open
  onClose: () => void;                    // Callback to close the mobile menu (usually sets state false)
}

/**
 * MobileNav Component
 * 
 * Renders the mobile navigation menu.
 * The menu slides down or toggles visibility based on `isMobileMenuOpen`.
 * Clicking a navigation link will close the menu by calling `onClose`.
 */
const MobileNav: React.FC<MobileNavProps> = ({
  navItems,
  isMobileMenuOpen,
  onClose,
}) => {
  // Hook to get current route location for active link styling
  const location = useLocation();

  return (
    // Conditionally add CSS class to control menu visibility and animations
    <div className={`mobile-nav ${isMobileMenuOpen ? "mobile-nav-open" : ""}`}>
      <div className="mobile-nav-content">
        {/* Render each nav item as a Link */}
        {navItems?.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            // Highlight active link based on current URL path
            className={`mobile-nav-link ${
              location.pathname === item.path ? "mobile-nav-link-active" : ""
            }`}
            // Close the mobile menu when a link is clicked
            onClick={onClose}
          >
            {/* Optional icon displayed before the label */}
            {item.icon && <span className="nav-icon">{item.icon}</span>}
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
