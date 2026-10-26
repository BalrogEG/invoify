// AiX fork: next/font/google fetches fonts.googleapis.com during `next build`,
// which the AiX build sandbox blocks. These stubs keep the same exports so
// app/[locale]/layout.tsx compiles unchanged; text falls back to the Tailwind
// sans stack and signature fonts fall back to the browser's cursive font.
type FontStub = { className: string; variable: string; style: { fontFamily: string } };

const stub = (className: string, fontFamily: string): FontStub => ({
    className,
    variable: "",
    style: { fontFamily },
});

// Default Fonts
export const outfit = stub("font-sans", "ui-sans-serif, system-ui, sans-serif");

// Signature fonts
export const dancingScript = stub("", "cursive");
export const parisienne = stub("", "cursive");
export const greatVibes = stub("", "cursive");
export const alexBrush = stub("", "cursive");
