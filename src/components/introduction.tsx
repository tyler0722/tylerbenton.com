import classNames from '../lib/class-names';
import { LinkButton } from './button';

const Introduction: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={classNames('introduction', className)} {...props}>
    <h2 className="introduction__title">Hello, I'm Tyler Benton</h2>
    <p>
      A software engineer based in Laurel, MD who enjoys leveraging cutting-edge technologies and languages like NodeJS
      and Golang to build fault-tolerant real-time systems that put architecture, scalability, and reliability at the
      forefront.
    </p>
    <p>
      I believe solving a problem is essential when building useful and effective software people are motivated to use,
      which is why I love using my knowledge to work on projects that empower people to accomplish their goals.
    </p>
    <LinkButton href="/" icon="rightArrow">
      View Resume
    </LinkButton>
  </div>
);

export default Introduction;
