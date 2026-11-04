import { useCurrentFrame } from "remotion";
import { DEGRADE_OR } from "../theme";

// Texte au dégradé doré avec un reflet lumineux qui le traverse.
export const TexteOr: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  const frame = useCurrentFrame();
  const position = (frame * 3) % 300;
  return (
    <span
      style={{
        backgroundImage: DEGRADE_OR,
        backgroundSize: "300% 100%",
        backgroundPosition: `${position}% 50%`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        filter: "drop-shadow(0 0 18px rgba(212,175,55,0.45))",
        ...style,
      }}
    >
      {children}
    </span>
  );
};
