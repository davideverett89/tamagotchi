import utils from '../helpers/utils';
import creatureData from '../helpers/data/creatureData';

const createFeeder = () => {
  const myTamagotchi = creatureData.getCreature();
  let domString = '';
  domString += '<div>';
  domString += `<h2>${myTamagotchi.name}</h2>`;
  domString += `<p>Fullness: ${myTamagotchi.full}</p>`;
  domString += '<button id="healthy">Healthy</button>';
  domString += '<button id="unhealthy">Unhealthy</button>';
  domString += '</div>';
  utils.printToDom('eat', domString);
  const moreFull = () => {
    const fullness = myTamagotchi.full;
    if (fullness < 90) {
      myTamagotchi.full += 10;
    } else if (fullness > 89 && fullness < 100) {
      myTamagotchi.full = 100;
    }
    createFeeder();
  };
  const lessFull = () => {
    const fullness = myTamagotchi.full;
    if (fullness > 3) {
      myTamagotchi.full -= 3;
    } else if (fullness < 3 && fullness > 0) {
      myTamagotchi.full = 0;
    }
    createFeeder();
  };
  $('#healthy').click(moreFull);
  $('#unhealthy').click(lessFull);
};

export default { createFeeder };
