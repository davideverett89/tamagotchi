import utils from '../helpers/utils';
import creatureData from '../helpers/data/creatureData';


const moreFull = () => {
  const myTamagotchi = creatureData.getCreature();
  myTamagotchi.full += 10;
};

const lessFull = () => {
  const myTamagotchi = creatureData.getCreature();
  myTamagotchi.full -= 3;
};

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
  $('#healthy').click(moreFull);
  $('#unhealthy').click(lessFull);
};

export default { createFeeder };
