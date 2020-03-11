import utils from '../../helpers/utils';
import tamagotchiData from '../../helpers/data/tamagotchiData';
import progress from '../progress/progress';
import './eat.scss';

const createFeeder = () => {
  const randomNum = Math.floor(Math.random() * 100);
  const myTamagotchi = tamagotchiData.getTamagotchi();
  let domString = '';
  domString += '<div class="eat">';
  domString += '<h2>Eat</h2>';
  domString += `<p>Fullness: ${myTamagotchi.full}</p>`;
  domString += '<button id="healthy">Healthy</button>';
  domString += '<button id="unhealthy">Unhealthy</button>';
  domString += '</div>';
  utils.printToDom('eat', domString);
  const moreFull = () => {
    $('#pet').toggleClass('image');
    if (myTamagotchi.full < (100 - randomNum)) {
      myTamagotchi.full += randomNum;
    } else if (myTamagotchi.full > ((100 - randomNum) - 1) && myTamagotchi.full < 100) {
      myTamagotchi.full = 100;
    }
    progress.printProgress();
    createFeeder();
  };
  const lessFull = () => {
    $('#pet').toggleClass('image');
    if (myTamagotchi.full > randomNum) {
      myTamagotchi.full -= randomNum;
    } else if (myTamagotchi.full < randomNum && myTamagotchi.full > 0) {
      myTamagotchi.full = 0;
    }
    progress.printProgress();
    createFeeder();
  };
  $('#healthy').click(moreFull);
  $('#unhealthy').click(lessFull);
};

export default { createFeeder };
