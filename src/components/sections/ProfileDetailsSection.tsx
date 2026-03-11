import { useState } from 'react';
import { useUserContext } from '../../context/UserContext';
import { useThemeStyles } from '../../hooks/useThemeStyles';
import { Card } from '../Card';
import { Button } from '../Button';
import type { CSSProperties } from 'react';

interface ProfileDetailsSectionProps {
  editable?: boolean;
}

export function ProfileDetailsSection({ editable }: ProfileDetailsSectionProps) {
  const { user, updateUser } = useUserContext();
  const { theme, themeName } = useThemeStyles();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: user.name, email: user.email, bio: user.bio });

  function handleSave() {
    updateUser(form);
    setEditing(false);
  }

  function handleCancel() {
    setForm({ name: user.name, email: user.email, bio: user.bio });
    setEditing(false);
  }

  const labelStyle: CSSProperties = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 600,
    color: theme.textMuted,
    marginBottom: theme.spacing.xs,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const inputStyle: CSSProperties = {
    width: '100%',
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderRadius: theme.borderRadius,
    border: `1px solid ${themeName === 'dark' ? '#475569' : '#cbd5e1'}`,
    backgroundColor: theme.surfaceColor,
    color: theme.textColor,
    fontSize: '0.95rem',
    fontFamily: theme.fontFamily,
    boxSizing: 'border-box',
  };

  const joined = new Date(user.joinDate).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
      <div style={{ marginBottom: theme.spacing.md }}>
        <span style={labelStyle}>{label}</span>
        {children}
      </div>
    );
  }

  return (
    <Card style={{ padding: theme.spacing.lg }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: theme.spacing.lg }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>Account Details</h3>
        {editable && !editing && (
          <Button variant="secondary" onClick={() => setEditing(true)}>Edit Profile</Button>
        )}
      </div>

      {editing ? (
        <form onSubmit={e => { e.preventDefault(); handleSave(); }}>
          <Field label="Name">
            <input style={inputStyle} value={form.name} onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))} />
          </Field>
          <Field label="Email">
            <input style={inputStyle} type="email" value={form.email} onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))} />
          </Field>
          <Field label="Bio">
            <textarea
              style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }}
              value={form.bio}
              onChange={e => setForm(prev => ({ ...prev, bio: e.target.value }))}
            />
          </Field>
          <div style={{ display: 'flex', gap: theme.spacing.sm }}>
            <Button type="submit">Save Changes</Button>
            <Button variant="ghost" onClick={handleCancel}>Cancel</Button>
          </div>
        </form>
      ) : (
        <>
          <Field label="Name"><div style={{ fontSize: '0.95rem', padding: `${theme.spacing.sm} 0` }}>{user.name}</div></Field>
          <Field label="Email"><div style={{ fontSize: '0.95rem', padding: `${theme.spacing.sm} 0` }}>{user.email}</div></Field>
          <Field label="Bio"><div style={{ fontSize: '0.95rem', padding: `${theme.spacing.sm} 0` }}>{user.bio}</div></Field>
          <Field label="Member Since"><div style={{ fontSize: '0.95rem', padding: `${theme.spacing.sm} 0` }}>{joined}</div></Field>
        </>
      )}
    </Card>
  );
}
