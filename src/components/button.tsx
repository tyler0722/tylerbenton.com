import { Props as IconProps } from './icon';
import Icon from './icon';
import classNames from '../lib/class-names';

interface ContentProps {
  icon?: IconProps['iconKey'];
}

export interface ButtonProps extends ContentProps, React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface LinkButtonProps extends ContentProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Content: React.FC<ContentProps> = ({ children, icon }) => (
  <div className="button__content">
    <span className="button__text">{children}</span>
    {icon ? <Icon className="button__icon" iconKey={icon} /> : null}
  </div>
);

export const Button: React.FC<ButtonProps> = ({ className, icon, children, ...props }) => (
  <button className={classNames('button', className)} {...props}>
    <Content icon={icon}>{children}</Content>
  </button>
);

export const LinkButton: React.FC<LinkButtonProps> = ({ className, icon, children, ...props }) => (
  <a className={classNames('button', className)} rel="noreferrer" target="_blank" {...props}>
    <Content icon={icon}>{children}</Content>
  </a>
);
