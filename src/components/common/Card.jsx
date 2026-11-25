import React from 'react';

/**
 * Reusable Card Component
 * Supports clean academic cards, stat cards with metrics, and container boxes.
 */
export function Card({
  title,
  subtitle,
  icon = null,
  action = null,
  badge = null,
  metric = null,
  metricLabel = null,
  trend = null,
  footer = null,
  children,
  className = '',
  style = {}
}) {
  return (
    <div
      className={`card-box ${className}`}
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-xs)',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        ...style
      }}
    >
      {(title || action || icon || badge) && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: children || metric ? '1rem' : 0,
            gap: '0.75rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {icon && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '34px',
                  height: '34px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--cyan-light)',
                  color: 'var(--cyan-700)',
                  fontSize: '1.1rem'
                }}
              >
                {icon}
              </span>
            )}
            <div>
              {title && (
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--navy-900)',
                    lineHeight: 1.2
                  }}
                >
                  {title}
                </h3>
              )}
              {subtitle && (
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {badge && <span>{badge}</span>}
            {action && <div>{action}</div>}
          </div>
        </div>
      )}

      {metric !== null && (
        <div style={{ marginBottom: children ? '0.75rem' : 0 }}>
          <div
            style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              color: 'var(--navy-900)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}
          >
            {metric}
          </div>
          {metricLabel && (
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              {metricLabel}
            </div>
          )}
        </div>
      )}

      {children && <div style={{ flex: 1 }}>{children}</div>}

      {footer && (
        <div
          style={{
            marginTop: '1rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '0.8rem',
            color: 'var(--text-muted)'
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}

export default Card;

