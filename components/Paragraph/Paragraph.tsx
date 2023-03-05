import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({
  children,
  size = 'M',
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p className={cn(className, styles.p, styles[`${size}`])} {...props}>
      {children}
    </p>
  );
};
