import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';


export const Tag = ({
  children,
  size = 'S',
  color = 'ghost',
  className,
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div className={cn(className, styles.tag, styles[`${size}`], styles[`${color}`])} {...props}>
      {
      href
        ? <a href={href}>{children}</a>
        : <>{children}</>
      }
    </div>
  );
};
