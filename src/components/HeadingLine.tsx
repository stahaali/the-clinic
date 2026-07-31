import { cn } from "@/lib/utils";

export function HeadingLine({
  align = "center",
  light = false,
  className,
}: {
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "heading-line",
        align === "center" && "mx-auto",
        light && "heading-line--light",
        className,
      )}
    />
  );
}
