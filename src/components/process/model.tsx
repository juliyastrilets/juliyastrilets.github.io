export interface ProcessStep {
  id: number;
  text: string;
}

export const ProcessSteps: ProcessStep[] = [
  {
    id: 1,
    text: '1. Layout analysis',
  },
  {
    id: 2,
    text: '2. Separation into components',
  },
  {
    id: 3,
    text: '3. Create and evaluate tasks',
  },
  {
    id: 4,
    text: '4. Component development',
  },
  {
    id: 5,
    text: '5. Creating pages',
  },
  {
    id: 6,
    text: '6. Integrating components into pages',
  },
  {
    id: 7,
    text: '7. Backend API integration',
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
