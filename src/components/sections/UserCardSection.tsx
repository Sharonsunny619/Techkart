import { useUserContext } from "../../context/UserContext";
import { useThemeStyles } from "../../hooks/useThemeStyles";
import { Card } from "../Card";

interface UserCardSectionProps {
  layout?: "horizontal" | "vertical";
  showStats?: boolean;
}

export function UserCardSection({
  layout = "horizontal",
  showStats,
}: UserCardSectionProps) {
  const { user } = useUserContext();
  const { themeName } = useThemeStyles();

  const horizontal = layout === "horizontal";

  return (
    <Card className="mb-6 overflow-hidden">
      <div
        className={`user-card__inner flex items-center gap-6 p-6 ${horizontal ? "flex-row" : "flex-col"}`}
      >
        <div className="h-22 w-22 flex items-center text-white bg-primary justify-center text-[40px] border-3 border-primary rounded-full">
          {user.avatar}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
          <p className="text-muted text-sm mb-1">{user.email}</p>
          <p className="text-muted text-sm m-0">{user.bio}</p>
        </div>
      </div>

      {showStats && (
        <div className="user-card__stats flex gap-4 px-6 pb-6">
          {Object.entries(user.stats).map(([key, val]) => (
            <div
              key={key}
              className={`text-center py-4 px-6 rounded-lg flex-1 ${themeName === "dark" ? "bg-foreground" : "bg-background"}`}
            >
              <div className="text-2xl font-extrabold text-primary">{val}</div>
              <div className="text-xs text-muted capitalize mt-1">{key}</div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
