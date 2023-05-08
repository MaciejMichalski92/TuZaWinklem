import { ReactNode } from 'react';

export interface ColumnProps {
  columnTitle?: string;
  children: ReactNode;
  isNavigation?: boolean;
}
