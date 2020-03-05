import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';

const init = () => {
  eat.createFeeder();
  play.createPlaySection();
};

init();

export default { init };
