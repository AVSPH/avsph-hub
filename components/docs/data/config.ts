import { BookOpen, Users, Zap, Home, Thermometer, Sparkles, Star, Bug, Waves, Plug, Leaf, Wrench } from "lucide-react";
import { DocGroup } from "./types";
import { homeSections } from "./home";
import { onboardingSections } from "./onboarding";
import { assistanceSections } from "./assistance";
import { promptEngineeringSections } from "./promptEngineering";
import { hvacSections } from "./hvac";
import { carpetCleaningSections } from "./carpetCleaning";
import { cleaningBusinessSections } from "./cleaningBusiness";
import { pestControlSections } from "./pestControl";
import { poolCleaningSections } from "./poolCleaning";
import { electricalServicesSections } from "./electricalServices";
import { lawnGardenSections } from "./lawnGarden";
import { plumbingSections } from "./plumbing";
import { handymanSections } from "./handyman";
import { homeRemodelingSections } from "./homeRemodeling";
import { garageDoorSections } from "./garageDoor";

export const docsData: Record<string, DocGroup[]> = {
  home: homeSections,
  onboarding: onboardingSections,
  assistance: assistanceSections,
  promptEngine: promptEngineeringSections,
  hvac: hvacSections,
  carpetCleaning: carpetCleaningSections,
  cleaningBusiness: cleaningBusinessSections,
  pestControl: pestControlSections,
  poolCleaning: poolCleaningSections,
  electricalServices: electricalServicesSections,
  lawnGarden: lawnGardenSections,
  plumbing: plumbingSections,
  handyman: handymanSections,
  homeRemodeling: homeRemodelingSections,
  garageDoor: garageDoorSections,
};

export const MAIN_DOCS = [
  {
    id: "onboarding",
    label: "VA Onboarding Portal",
    icon: Home,
    title: "Onboarding Guide",
    desc: "VA Expectation & Responsibility",
  },
  {
    id: "home",
    label: "SOP Playbook",
    icon: BookOpen,
    title: "SOP Playbook",
    desc: "Standard Operating Procedures",
  },
  {
    id: "assistance",
    label: "Executive Assistance",
    icon: Users,
    title: "Executive Assistance",
    desc: "EA Patterns & Guidelines",
  },
  {
    id: "promptEngine",
    label: "Prompt Engineering",
    icon: Zap,
    title: "Prompt Engineering",
    desc: "Google Cloud Prompt Guide",
  },
];

export const BUSINESS_GUIDES = [
  {
    id: "homeRemodeling",
    label: "Home Remodeling Business",
    icon: Home,
    title: "Home Remodeling Guide",
    desc: "Training Resource",
  },
  {
    id: "hvac",
    label: "HVAC Business",
    icon: Thermometer,
    title: "HVAC Knowledge Guide",
    desc: "Training Resource",
  },
  {
    id: "carpetCleaning",
    label: "Carpet Cleaning Business",
    icon: Sparkles,
    title: "Carpet Cleaning Guide",
    desc: "Training Resource",
  },
  {
    id: "cleaningBusiness",
    label: "Cleaning Business",
    icon: Star,
    title: "Cleaning Business Guide",
    desc: "Training Resource",
  },
  {
    id: "pestControl",
    label: "Pest Control Business",
    icon: Bug,
    title: "Pest Control Guide",
    desc: "Training Resource",
  },
  {
    id: "poolCleaning",
    label: "Pool Cleaning Business",
    icon: Waves,
    title: "Pool Cleaning Guide",
    desc: "Training Resource",
  },
  {
    id: "electricalServices",
    label: "Electrical Services Business",
    icon: Plug,
    title: "Electrical Services Guide",
    desc: "Training Resource",
  },
  {
    id: "lawnGarden",
    label: "Lawn & Garden Business",
    icon: Leaf,
    title: "Lawn & Garden Guide",
    desc: "Training Resource",
  },
  {
    id: "plumbing",
    label: "Plumbing Business",
    icon: Wrench,
    title: "Plumbing Knowledge Guide",
    desc: "Training Resource",
  },
  {
    id: "handyman",
    label: "Handyman & General Repair",
    icon: Wrench,
    title: "Handyman Knowledge Guide",
    desc: "Training Resource",
  },
  {
    id: "garageDoor",
    label: "Garage Door Service",
    icon: Wrench,
    title: "Garage Door Guide",
    desc: "Training Resource",
  },
];

export const AI_TOOLS = [
  {
    id: "chatgpt",
    label: "ChatGPT",
    logo: "https://cdn.simpleicons.org/chatbot",
    title: "ChatGPT",
    desc: "Conversational tasks, generation & logic",
    url: "https://chat.openai.com",
    category: "AI"
  },
  {
    id: "claude",
    label: "Claude",
    logo: "https://cdn.simpleicons.org/anthropic",
    title: "Claude",
    desc: "Nuanced writing & context analysis",
    url: "https://claude.ai",
    category: "AI"
  },
  {
    id: "perplexity",
    label: "Perplexity",
    logo: "https://svgl.app/library/perplexity.svg",
    title: "Perplexity",
    desc: "AI search with cited sources",
    url: "https://perplexity.ai",
    category: "AI"
  },
  {
    id: "canva",
    label: "Canva",
    logo: "https://svgl.app/library/canva.svg",
    title: "Canva",
    desc: "AI-powered creative design",
    url: "https://canva.com",
    category: "Design"
  },
  {
    id: "gdocs",
    label: "Google Docs",
    logo: "https://cdn.simpleicons.org/googledocs",
    title: "Google Docs",
    desc: "Cloud collaborative writing",
    url: "https://docs.google.com",
    category: "Tools"
  },
  {
    id: "excel",
    label: "Excel / Sheets",
    logo: "https://svgl.app/library/google-sheets.svg",
    title: "Excel / Sheets",
    desc: "Data analysis & organization",
    url: "https://sheets.google.com",
    category: "Tools"
  },
  {
    id: "slack",
    label: "Slack",
    logo: "https://svgl.app/library/slack.svg",
    title: "Slack",
    desc: "Team communication & hub",
    url: "https://slack.com",
    category: "Tools"
  },
  {
    id: "notion",
    label: "Notion",
    logo: "https://svgl.app/library/notion.svg",
    title: "Notion",
    desc: "Notes, docs & database workspace",
    url: "https://notion.so",
    category: "Tools"
  },
  {
    id: "loom",
    label: "Loom",
    logo: "https://svgl.app/library/loom.svg",
    title: "Loom",
    desc: "Async video screen messaging",
    url: "https://loom.com",
    category: "Tools"
  }
];

export const TOP_LINKS = [...MAIN_DOCS, ...BUSINESS_GUIDES];
