export interface NavItem {
  path: string;
  label: string;
  icon?: React.ReactNode;
}

export interface HeaderProps {
  title?: string;
  navItems?: NavItem[];
}
