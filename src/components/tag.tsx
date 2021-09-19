import classNames from '../lib/class-names';

const Tag: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={classNames('tag', className)} {...props}>
    <span className="tag__text">{children}</span>
  </div>
);

export default Tag;
