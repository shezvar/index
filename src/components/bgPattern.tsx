export function BgPattern() {
  return (
    <div
      className="text-stone-200 absolute inset-x-0 top-0 bottom-0 size-auto z-0"
      style={{
        backgroundImage:
          "repeating-linear-gradient(125deg, transparent, transparent 6px, currentColor 6px, currentColor 7px)",
      }}
    ></div>
  );
}
