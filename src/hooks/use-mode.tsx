"use client"

import React, { createContext, useContext, useState } from "react";
import { SITE_CONFIG } from "@/config/site-config";

// These match the 'mode' strings you used in your data.ts file
export type Mode = "generalist" | "fullstack" | "ai-ml" | "data" | "webscraping";

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  // Initialize with the default mode from our config
  const [mode, setMode] = useState<Mode>(SITE_CONFIG.defaultMode as Mode);

  // Intercept the mode change request
  const handleSetMode = (newMode: Mode) => {
    // 🛑 Guard Clause: Refuse to change if feature is disabled in production
    if (!SITE_CONFIG.enableContextSwitcher) {
      console.warn("Context switching is currently disabled in this environment.");
      return; 
    }
    setMode(newMode);
  }

  return (
    <ModeContext.Provider value={{ mode, setMode: handleSetMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}