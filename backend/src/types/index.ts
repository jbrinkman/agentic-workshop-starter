export interface Item {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
