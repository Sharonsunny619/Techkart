import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useConfigContext } from '../context/ConfigContext';
import { useThemeContext } from '../context/ThemeContext';
import { useThemeStyles } from '../hooks/useThemeStyles';
import type { CSSProperties } from 'react';

export function Navbar() {
  const { config } = useConfigContext();
  const { themeName, toggleTheme } = useThemeContext();
  const { theme, borderColor } = useThemeStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkStyle: CSSProperties = {
    textDecoration: 'none',
    color: theme.textColor,
    fontWeight: 500,
    fontSize: '0.95rem',
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderRadius: theme.borderRadius,
    transition: 'color 0.2s ease',
    whiteSpace: 'nowrap',
  };

  const activeLinkStyle: CSSProperties = {
    ...linkStyle,
    color: theme.primaryColor,
    fontWeight: 600,
  };

  const hamburgerLine = {
    width: 22, height: 2,
    backgroundColor: theme.textColor,
    borderRadius: 1,
    transition: 'all 0.2s',
  };

  return (
    <>
      <nav
        className="navbar"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          padding: `${theme.spacing.md} ${theme.spacing.xl}`,
          backgroundColor: theme.surfaceColor,
          borderBottom: `1px solid ${borderColor}`,
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.5px', textTransform: 'uppercase' as const }}>
            {config.siteName}
          </span>
        </div>

        {/* Desktop nav links */}
        <div className="navbar__links" style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.xs }}>
          {config.navigation.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }: { isActive: boolean }) => isActive ? activeLinkStyle : linkStyle}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Right side - theme toggle + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: theme.spacing.md }}>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            style={{
              background: 'none',
              border: `1px solid ${borderColor}`,
              borderRadius: '50%',
              width: 40, height: 40,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '1.1rem',
              color: theme.textColor,
              transition: 'border-color 0.2s ease',
            }}
            aria-label="Toggle theme"
          >
            {themeName === 'light' ? '🌙' : '☀️'}
          </button>

          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(prev => !prev)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              flexDirection: 'column',
              gap: 4,
              padding: theme.spacing.sm,
            }}
            aria-label="Toggle menu"
          >
            <span style={hamburgerLine} />
            <span style={hamburgerLine} />
            <span style={hamburgerLine} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="navbar__mobile-menu"
          style={{
            position: 'fixed',
            top: 65, left: 0, right: 0,
            backgroundColor: theme.surfaceColor,
            borderBottom: `1px solid ${borderColor}`,
            padding: theme.spacing.md,
            display: 'flex', flexDirection: 'column',
            gap: theme.spacing.xs,
            zIndex: 99,
          }}
        >
          {config.navigation.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              style={({ isActive }: { isActive: boolean }) => ({
                ...(isActive ? activeLinkStyle : linkStyle),
                padding: `${theme.spacing.md} ${theme.spacing.md}`,
                borderRadius: theme.borderRadius,
                backgroundColor: isActive ? `${theme.primaryColor}10` : 'transparent',
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
