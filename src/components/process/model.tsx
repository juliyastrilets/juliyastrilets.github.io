export interface ProcessStep {
  id: number;
  text: string;
}

export const ProcessSteps: ProcessStep[] = [
  {
    id: 1,
    text: '1. Анализ задачи',
  },
  {
    id: 2,
    text: '2. Уточняющие вопросы',
  },
  {
    id: 3,
    text: '3. Оценка',
  },
  {
    id: 4,
    text: '4. Выполнение',
  },
  {
    id: 5,
    text: '5. Предварительное тестирование',
  },
  {
    id: 6,
    text: '6. Проверка кода',
  },
  {
    id: 7,
    text: '7. Описание документации',
  },
  {
    id: 8,
    text: '8. Передача в тестирование',
  },
];
