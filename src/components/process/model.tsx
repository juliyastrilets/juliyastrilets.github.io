export interface ProcessStep {
  id: number;
  text: string;
}

export const ProcessSteps: ProcessStep[] = [
  {
    id: 1,
    text: '1. Task analysis',
  },
  {
    id: 2,
    text: '2. Clarifying questions',
  },
  {
    id: 3,
    text: '3. Task assessment',
  },
  {
    id: 4,
    text: '4. Development',
  },
  {
    id: 5,
    text: '6. Preliminary testing',
  },
  {
    id: 6,
    text: '5. Description of documentation',
  },
  {
    id: 7,
    text: '7. Code review',
  },
  {
    id: 8,
    text: '8. Design review',
  },
  {
    id: 9,
    text: '9. Transfer to testing',
  },
];
