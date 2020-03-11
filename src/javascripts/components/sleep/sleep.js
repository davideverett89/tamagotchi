import utils from '../../helpers/utils';
import tamagotchiData from '../../helpers/data/tamagotchiData';
import progress from '../progress/progress';
import './sleep.scss';

const createSleepSection = () => {
  const randomNum = Math.floor(Math.random() * 100);
  const myTamagotchi = tamagotchiData.getTamagotchi();
  let domString = '';
  domString += '<div class="sleep">';
  domString += '<h2>Sleep</h2>';
  domString += `<p>Energy: ${myTamagotchi.energy}</p>`;
  domString += '<button id="nap">Nap</button>';
  domString += '<button id="deep-slumber">Deep Slumber</button>';
  domString += '</div>';
  utils.printToDom('sleep', domString);
  const nap = () => {
    if (myTamagotchi.energy < (100 - randomNum)) {
      myTamagotchi.energy += randomNum;
    } else if (myTamagotchi.energy > ((100 - randomNum) - 1) && myTamagotchi.energy < 100) {
      myTamagotchi.energy = 100;
    }
    $('#pet').animate({
      left: '685px',
      top: '350px',
    });
    progress.printProgress();
    createSleepSection();
  };
  const deepSlumber = () => {
    if (myTamagotchi.energy < 40) {
      myTamagotchi.energy += 60;
    } else if (myTamagotchi.energy > 39 && myTamagotchi.energy < 100) {
      myTamagotchi.energy = 100;
    }
    $('#pet').animate({
      left: '685px',
      top: '350px',
    });
    progress.printProgress();
    createSleepSection();
  };
  $('#nap').click(nap);
  $('#deep-slumber').click(deepSlumber);
};

export default { createSleepSection };
