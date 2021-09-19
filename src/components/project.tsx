import classNames from '../lib/class-names';
import TagList from './tag-list';
import { Button } from './button';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  url: string;
  title: string;
  tagline: string | React.ReactNode;
  technologies: string[];
}

const Project: React.FC<Props> = ({ className, url, title, tagline, technologies, ...props }) => (
  <div className={classNames('project', className)} {...props}>
    <a className="project__link" href={url} rel="noreferrer" target="_blank">
      <div className="project__content">
        <h3 className="project__title">{title}</h3>
        <h2 className="project__tagline">{tagline}</h2>
        <TagList className="project__technologies" tags={technologies} />
        <Button icon="github">View Repository</Button>
      </div>
    </a>
  </div>
);

export default Project;
