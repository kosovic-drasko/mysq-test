import { IStudent, NewStudent } from './student.model';

export const sampleWithRequiredData: IStudent = {
  id: 23105,
};

export const sampleWithPartialData: IStudent = {
  id: 68190,
  ime: 'solid',
};

export const sampleWithFullData: IStudent = {
  id: 31770,
  ime: 'facilitate Refined Auto',
};

export const sampleWithNewData: NewStudent = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
