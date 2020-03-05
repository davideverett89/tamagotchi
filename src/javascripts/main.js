import '../styles/main.scss';
import eat from './components/eat';

const init = () => {
  eat.createFeeder();
};

init();

export default { init };
