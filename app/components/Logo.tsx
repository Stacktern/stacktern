export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Three stacked diamond / rhombus layers representing a "stack" */}
      <path d="M16 2L30 7L16 12L2 7Z" fill="currentColor" />
      <path d="M16 12L30 17L16 22L2 17Z" fill="currentColor" fillOpacity="0.6" />
      <path d="M16 22L30 27L16 32L2 27Z" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}
