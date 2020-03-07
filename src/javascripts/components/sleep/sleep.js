import utils from '../../helpers/utils';
import tamagotchiData from '../../helpers/data/tamagotchiData';

const createSleepSection = () => {
  const myTamagotchi = tamagotchiData.getTamagotchi();
  let domString = '';
  domString += '<div>';
  domString += '<h2>Sleep</h2>';
  domString += `<p>Energy: ${myTamagotchi.energy}</p>`;
  domString += '<button id="nap">Nap</button>';
  domString += '<button id="deep-slumber">Deep Slumber</button>';
  domString += '</div>';
  utils.printToDom('sleep', domString);
  const nap = () => {
    if (myTamagotchi.energy < 50) {
      myTamagotchi.energy += 50;
    } else if (myTamagotchi.energy > 49 && myTamagotchi.energy < 100) {
      myTamagotchi.energy = 100;
    }
    createSleepSection();
  };
  const deepSlumber = () => {
    if (myTamagotchi.energy < 40) {
      myTamagotchi.energy += 60;
    } else if (myTamagotchi.energy > 39 && myTamagotchi.energy < 100) {
      myTamagotchi.energy = 100;
    }
    createSleepSection();
  };
  $('#nap').click(nap);
  $('#deep-slumber').click(deepSlumber);
};

export default { createSleepSection };
