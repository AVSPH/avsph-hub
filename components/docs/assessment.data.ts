import { LucideIcon, Thermometer, Wrench, Sparkles, Star, Bug, Waves, Plug, Leaf, Home } from "lucide-react";

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
}

export interface Assessment {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export const ASSESSMENT_DATA: Record<string, Assessment> = {
  homeRemodeling: {
    id: "homeRemodeling",
    title: "Home Remodeling Assessment",
    description: "Verify your knowledge of home remodeling project management and client expectations.",
    questions: [
      {
        id: "hr_q1",
        text: "What is the first step in a home remodeling project assessment?",
        options: ["Ordering materials", "Site inspection and client consultation", "Demolition", "Finalizing the budget"],
        correctAnswer: 1
      },
      {
        id: "hr_q2",
        text: "Which of these is a critical safety protocol during remodeling?",
        options: ["Leaving tools plugged in overnight", "Ignoring load-bearing wall signs", "Proper PPE and dust containment", "Working without a permit"],
        correctAnswer: 2
      }
    ]
  },
  hvac: {
    id: "hvac",
    title: "HVAC Knowledge Assessment",
    description: "Test your understanding of HVAC systems, troubleshooting, and maintenance protocols.",
    questions: [
      {
        id: "hvac_q1",
        text: "What does HVAC stand for?",
        options: ["Heat, Ventilation, Atmosphere, Cooling", "Heating, Ventilation, and Air Conditioning", "High Voltage Air Control", "Home Ventilation and Cooling"],
        correctAnswer: 1
      },
      {
        id: "hvac_q2",
        text: "What is the primary indicator of a refrigerant leak?",
        options: ["Loud whistling sound", "Ice buildup on the evaporator coil", "Frequent filter clogging", "The thermostat turning off"],
        correctAnswer: 1
      }
    ]
  },
  carpetCleaning: {
    id: "carpetCleaning",
    title: "Carpet Cleaning Assessment",
    description: "Knowledge check for carpet cleaning methods, chemicals, and equipment handling.",
    questions: [
      {
        id: "cc_q1",
        text: "What is the common pH level for a professional carpet cleaning solution?",
        options: ["pH 1-3 (Acidic)", "pH 7 (Neutral)", "pH 8-10 (Alkaline)", "pH 14 (Strong Base)"],
        correctAnswer: 2
      }
    ]
  },
  cleaningBusiness: {
    id: "cleaningBusiness",
    title: "Cleaning Business Assessment",
    description: "Standard practices for professional residential and commercial cleaning.",
    questions: [
      {
        id: "cb_q1",
        text: "Which color code is typically used for restroom cleaning cloths to prevent cross-contamination?",
        options: ["Blue", "Yellow", "Red", "Green"],
        correctAnswer: 2
      }
    ]
  },
  pestControl: {
    id: "pestControl",
    title: "Pest Control Assessment",
    description: "Safety and identification quiz for pest control specialists.",
    questions: [
      {
        id: "pc_q1",
        text: "What is an 'Integrated Pest Management' (IPM) approach?",
        options: ["Using as much pesticide as possible", "A combination of biological, cultural, and chemical tools", "Only using organic baits", "Ignoring non-chemical methods"],
        correctAnswer: 1
      }
    ]
  },
  poolCleaning: {
    id: "poolCleaning",
    title: "Pool Cleaning Assessment",
    description: "Chemical balance and maintenance procedures for swimming pools.",
    questions: [
      {
        id: "pool_q1",
        text: "What is the ideal range for Free Chlorine in a residential swimming pool?",
        options: ["0.5 - 1.0 ppm", "1.0 - 3.0 ppm", "5.0 - 10.0 ppm", "0 ppm"],
        correctAnswer: 1
      }
    ]
  },
  electricalServices: {
    id: "electricalServices",
    title: "Electrical Services Assessment",
    description: "Safety and core electrical concept check.",
    questions: [
      {
        id: "elec_q1",
        text: "What tool is used to test if a wire is live without touching it?",
        options: ["Multimeter", "Non-contact voltage tester", "Wire stripper", "Screwdriver"],
        correctAnswer: 1
      }
    ]
  },
  lawnGarden: {
    id: "lawnGarden",
    title: "Lawn & Garden Assessment",
    description: "Landscaping and lawn care maintenance protocols.",
    questions: [
      {
        id: "lg_q1",
        text: "What is the 'One-Third Rule' in lawn mowing?",
        options: ["Always mow 1/3 of the lawn each day", "Never remove more than 1/3 of the grass blade height at once", "Only mow in 1/3 humidity", "Add fertilizer every 3 weeks"],
        correctAnswer: 1
      }
    ]
  },
  plumbing: {
    id: "plumbing",
    title: "Plumbing Knowledge Assessment",
    description: "Core plumbing concepts, tools, and emergency procedures.",
    questions: [
      {
        id: "plumb_q1",
        text: "What is the primary function of a 'trap' under a sink?",
        options: ["To catch dropped jewelry", "To prevent sewer gases from entering the home", "To slow down water flow", "To filter out solid waste"],
        correctAnswer: 1
      },
      {
        id: "plumb_q2",
        text: "Which material is most commonly used for modern residential water supply lines?",
        options: ["PVC", "Iron", "PEX", "Clay"],
        correctAnswer: 2
      }
    ]
  },
  handyman: {
    id: "handyman",
    title: "Handyman Knowledge Assessment",
    description: "General repair and maintenance skill check.",
    questions: [
      {
        id: "handy_q1",
        text: "What type of anchor is best for hanging heavy items on drywall where no stud is present?",
        options: ["Nail", "Toggle Bolt", "Plastic expansion anchor", "Wood screw"],
        correctAnswer: 1
      }
    ]
  },
  garageDoor: {
    id: "garageDoor",
    title: "Garage Door Assessment",
    description: "Safety and mechanical check for garage door systems.",
    questions: [
      {
        id: "gd_q1",
        text: "What is the most dangerous component of a garage door system to adjust without training?",
        options: ["The rollers", "The torsion spring", "The remote battery", "The weather stripping"],
        correctAnswer: 1
      }
    ]
  }
};
