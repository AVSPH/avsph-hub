// Barrel file — re-exports everything from all sub-modules.
// Any file importing from "./data" will resolve here automatically.

// Shared types
export * from "./types";

// Section data
export * from "./onboarding";
export * from "./home";
export * from "./assistance";
export * from "./promptEngineering";
export * from "./hvac";
export * from "./carpetCleaning";
export * from "./cleaningBusiness";
export * from "./pestControl";
export * from "./poolCleaning";
export * from "./electricalServices";
export * from "./lawnGarden";
export * from "./plumbing";
export * from "./homeRemodeling";
export * from "./handyman";
export * from "./garageDoor";

// Config — docsData, MAIN_DOCS, BUSINESS_GUIDES, AI_TOOLS, TOP_LINKS
export * from "./config";
