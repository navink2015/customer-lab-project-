import { Schema } from '../types/schema.types';

export const AVAILABLE_SCHEMAS: Schema[] = [
  { label: 'First Name', value: 'first_name', category: 'user' },
  { label: 'Last Name', value: 'last_name', category: 'user' },
  { label: 'Gender', value: 'gender', category: 'user' },
  { label: 'Age', value: 'age', category: 'user' },
  { label: 'Account Name', value: 'account_name', category: 'group' },
  { label: 'City', value: 'city', category: 'group' },
  { label: 'State', value: 'state', category: 'group' },
];


