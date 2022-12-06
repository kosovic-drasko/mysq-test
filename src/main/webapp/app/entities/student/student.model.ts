export interface IStudent {
  id: number;
  ime?: string | null;
}

export type NewStudent = Omit<IStudent, 'id'> & { id: null };
