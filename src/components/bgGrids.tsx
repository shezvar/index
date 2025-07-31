export function BgGrids() {
  return (
    <>
    <g stroke="#E5E7EB" strokeWidth="1">
                <rect x="0" y="0" width="360" height="140" fill="none" />
                {Array.from({ length: 13 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="140" />
                ))}
                {Array.from({ length: 8 }).map((_, i) => ( // Adjusted for full height coverage: 140/20 + 1 = 8
                  <line key={`h${i}`} x1="0" y1={i * 20} x2="360" y2={i * 20} />
                ))}
              </g>
    </>
  );
}
