import { useCurrentFrame } from "remotion";
import { DEGRADE_OR } from "../theme";

export const TexteOr: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => {
  const frame = useCurrentFrame();
  return (
    <span
      style={{
        backgroundImage: DEGRADE_OR,
        backgroundSize: "300% 100%",
        backgroundPosition: `${(frame * 2.5) % 300}% 50%`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        filter: "drop-shadow(0 2px 4px rgba(120,90,10,0.25))",
        ...style,
      }}
    >
      {children}
    </span>
  );
};
