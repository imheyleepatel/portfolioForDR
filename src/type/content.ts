export interface SheetRow {
  section: string;
  key: string;
  value: string;
}

export interface ContentData {
  [section: string]: {
    [key: string]: string;
  };
}
