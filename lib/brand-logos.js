export function PythonLogo({ size = 16, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-hidden
    >
      <path
        fill="#3776AB"
        d="M16 2c-5 0-7 2-7 6v4h8v2H6c-3 0-4 2-4 6s2 6 6 6h3v-4c0-3 2-5 5-5h7c2 0 3-2 3-4V8c0-4-4-6-10-6zm-3 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
      />
      <path
        fill="#FFD43B"
        d="M16 30c5 0 7-2 7-6v-4h-8v-2h11c3 0 4-2 4-6s-2-6-6-6h-3v4c0 3-2 5-5 5H9c-2 0-3 2-3 4v5c0 4 4 6 10 6zm3-6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
      />
    </svg>
  );
}

export function ViteLogo({ size = 16, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-hidden
    >
      <path fill="#BD34FE" d="M30.2 6.4 16.7 29.6a.8.8 0 0 1-1.4 0L1.8 6.4A.8.8 0 0 1 2.5 5.2h27a.8.8 0 0 1 .7 1.2z" />
      <path fill="#41D1FF" d="M16 6.8 5.4 25.2h21.2L16 6.8z" opacity=".45" />
      <path fill="#FFD62E" d="M16 11.2 12.4 19h2.3l1.3-2.9L17.3 19H19.6z" />
    </svg>
  );
}
