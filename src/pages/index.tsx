import Introduction from '../components/introduction';
import Project from '../components/project';

const Home = () => (
  <section>
    <div className="container">
      <Introduction className="home__introduction" />
      <Project
        url="https://github.com/tylerbenton0722/quizbit"
        title="Quizbit"
        tagline="Competitive Platform for Engineers of All Types"
        technologies={['TypeScript', 'PostgreSQL', 'ReactJS', 'NodeJS', 'Redis', 'SequelizeJS']}
      />
    </div>
  </section>
);

export default Home;
