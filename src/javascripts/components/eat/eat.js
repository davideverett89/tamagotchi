import utils from '../../helpers/utils';
import tamagotchiData from '../../helpers/data/tamagotchiData';
import './eat.scss';

const createFeeder = () => {
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
    if (myTamagotchi.full < 90) {
      myTamagotchi.full += 10;
    } else if (myTamagotchi.full > 89 && myTamagotchi.full < 100) {
      myTamagotchi.full = 100;
    }
    createFeeder();
  };
  const lessFull = () => {
    if (myTamagotchi.full > 3) {
      myTamagotchi.full -= 3;
    } else if (myTamagotchi.full < 3 && myTamagotchi.full > 0) {
      myTamagotchi.full = 0;
    }
    createFeeder();
  };
  $('#healthy').click(moreFull);
  $('#unhealthy').click(lessFull);
};

export default { createFeeder };
