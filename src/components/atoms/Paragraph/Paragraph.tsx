import { ParagraphProps } from './Paragraph.types';

export const Paragraph = ({ children, classes }: ParagraphProps) => (
  <p className={`${classes ? classes : ''}`}>{children}</p>
);
