export const SITE_CONFIG = {
  // If "true" in .env.local, show the switcher. Otherwise hide it.
  enableContextSwitcher: process.env.NEXT_PUBLIC_SHOW_MODES === 'true',
  defaultMode: "generalist", 
};