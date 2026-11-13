export const profile = {
  name: "Ajay Pamula",
  email: "pamulaajay953@gmail.com",
  linkedin: "https://www.linkedin.com/in/pamula-ajay-611042267/",
  location: "Hyderabad, India",
  resume: "/Ajay-Pamula-Resume.pdf",
} as const;

export const navigation = [
  ["Work", "work"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["About", "about"],
  ["Contact", "contact"],
] as const;

export const skillGroups = [
  { name: "Frontend", detail: "My primary focus", skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS", "Material UI", "Tailwind CSS"] },
  { name: "Mobile", detail: "Beyond the browser", skills: ["React Native", "Reusable mobile UI", "Local storage"] },
  { name: "State & integration", detail: "Connecting the pieces", skills: ["Redux", "Context API", "REST APIs", "Axios", "WebSockets", "LiveKit"] },
  { name: "Workflow", detail: "Building together", skills: ["Git", "GitHub", "Postman", "Linux", "Agile collaboration"] },
] as const;
