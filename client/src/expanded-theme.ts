// theme.d.ts (or any global `.ts` file loaded during compile)
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    [key: number]: string; // ✅ allow primary[100], etc.
    tertiary?: string;
  }
}
