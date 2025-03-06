export interface Task {
  id?: number;
  status: string;
  title: string;
  description?: string;
  links: string[];
  files: string[];
  tags: string[];
  created_at?: string;
  updated_at?: string;
}
