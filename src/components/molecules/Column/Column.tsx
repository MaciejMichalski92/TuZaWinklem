import { ColumnProps } from './Column.types';
import style from './Column.module.scss';

export const Column = ({
  columnTitle,
  children,
  isNavigation = false
}: ColumnProps) => (
  <div className={style.Column}>
    <h2 className={style.ColumnTitle}>{columnTitle}</h2>
    {/* toDo add Li atom */}
    {isNavigation ? (
      <nav className={style.ColumnContent}>{children}</nav>
    ) : (
      <div className={style.ColumnContent}>{children}</div>
    )}
  </div>
);
