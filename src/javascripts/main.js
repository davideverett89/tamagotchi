import '../styles/main.scss';
import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';
import progress from './components/progress/progress';
import picture from './components/picture/picture';

const init = () => {
  eat.createFeeder();
  play.createPlaySection();
  fight.createFightSection();
  sleep.createSleepSection();
  progress.printProgress();
  picture.pictureBuilder();
};

init();
