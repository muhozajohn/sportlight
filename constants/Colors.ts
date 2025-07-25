
export const COLORS = {
  // Primary brand colors
  primary: "#4ADE80",
  primaryDark: "#22C55E",
  primaryLight: "#86EFAC",
  
  // Secondary colors
  secondary: "#2DD4BF",
  secondaryDark: "#0D9488",
  secondaryLight: "#5EEAD4",
  
  // Background colors
  background: "#000000",
  backgroundSecondary: "#0A0A0A",
  
  // Surface colors
  surface: "#1A1A1A",
  surfaceLight: "#2A2A2A",
  surfaceElevated: "#3A3A3A",
  
  // Text colors
  white: "#FFFFFF",
  textPrimary: "#FFFFFF",
  textSecondary: "#E5E7EB",
  textMuted: "#9CA3AF",
  
  // Neutral colors
  grey: "#9CA3AF",
  greyLight: "#D1D5DB",
  greyDark: "#6B7280",
  
  // Status colors
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
  
  // Interactive colors
  accent: "#8B5CF6",
  highlight: "#F97316",
  
  // Border colors
  border: "#374151",
  borderLight: "#4B5563",
  
  // Transparent variants
  overlay: "rgba(0, 0, 0, 0.5)",
  overlayLight: "rgba(0, 0, 0, 0.3)",
  overlayHeavy: "rgba(0, 0, 0, 0.8)",
} as const;

export type ColorKey = keyof typeof COLORS;