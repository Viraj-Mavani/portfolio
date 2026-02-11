export const SITE_CONFIG = {
  // If NEXT_PUBLIC_SHOW_MODES is "true", the switcher appears.
  // Otherwise, it stays hidden (defaulting to false for safety).
  enableContextSwitcher: process.env.NEXT_PUBLIC_SHOW_MODES === 'true',
  
  // The default mode if the switcher is disabled
  defaultMode: "generalist", 
};