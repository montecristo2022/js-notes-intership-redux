import { RootState } from './store';

export const getTasks = (state: RootState) => state.tasks;

export const getStatusFilter = (state: RootState) => state.filters.status;



