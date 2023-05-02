export interface Task {
  id?: number;
  text: string;
  day: string;
  color: string;
}

export type Color = 'yellow' | 'pink' | 'cyan' | 'orange' | 'magenta' | 'green'
