export type SchemaCategory = 'user' | 'group';

export interface Schema {
  label: string;
  value: string;
  category: SchemaCategory;
}

export interface SelectedSchema extends Schema {
  id: string;
}

export interface SegmentData {
  segment_name: string;
  schema: Array<Record<string, string>>;
}


