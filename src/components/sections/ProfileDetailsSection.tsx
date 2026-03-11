import { useState } from 'react';
import { useUserContext } from '../../context/UserContext';
import { Card } from '../Card';
import { Button } from '../Button';

interface ProfileDetailsSectionProps {
  editable?: boolean;
}

const labelClasses = 'block text-xs font-semibold text-muted mb-1 uppercase tracking-wide';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <span className={labelClasses}>{label}</span>
      {children}
    </div>
  );
}

export function ProfileDetailsSection({ editable }: ProfileDetailsSectionProps) {
  const { user, updateUser } = useUserContext();
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

  const joined = new Date(user.joinDate).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  const inputClasses = 'w-full py-2 px-4 rounded-lg border border-border bg-surface text-foreground text-[0.95rem] font-body box-border';

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold m-0">Account Details</h3>
        {editable && !editing && (
          <Button variant="secondary" onClick={() => setEditing(true)}>Edit Profile</Button>
        )}
      </div>

      {editing ? (
        <form onSubmit={e => { e.preventDefault(); handleSave(); }}>
          <Field label="Name">
            <input className={inputClasses} value={form.name} onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))} />
          </Field>
          <Field label="Email">
            <input className={inputClasses} type="email" value={form.email} onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))} />
          </Field>
          <Field label="Bio">
            <textarea
              className={`${inputClasses} min-h-20 resize-y`}
              value={form.bio}
              onChange={e => setForm(prev => ({ ...prev, bio: e.target.value }))}
            />
          </Field>
          <div className="flex gap-2">
            <Button type="submit">Save Changes</Button>
            <Button variant="ghost" onClick={handleCancel}>Cancel</Button>
          </div>
        </form>
      ) : (
        <>
          <Field label="Name"><div className="text-[0.95rem] py-2">{user.name}</div></Field>
          <Field label="Email"><div className="text-[0.95rem] py-2">{user.email}</div></Field>
          <Field label="Bio"><div className="text-[0.95rem] py-2">{user.bio}</div></Field>
          <Field label="Member Since"><div className="text-[0.95rem] py-2">{joined}</div></Field>
        </>
      )}
    </Card>
  );
}
