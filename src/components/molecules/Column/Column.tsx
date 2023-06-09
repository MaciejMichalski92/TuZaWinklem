import { ColumnProps } from './Column.types';
import style from './Column.module.scss';

export const Column = ({
  columnTitle,
  children,
  isNavigation = false
}: ColumnProps) => (
  <div className={style.Column}>
    {columnTitle && (
      <h2 className={style.ColumnTitle}>{columnTitle}</h2>
    )}
    {isNavigation ? (
      <nav className={style.ColumnContent}>
        <ul>{children}</ul>
      </nav>
    ) : (
      <div className={style.ColumnContent}>{children}</div>
    )}
  </div>
);
