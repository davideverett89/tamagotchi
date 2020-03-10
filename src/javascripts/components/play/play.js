import utils from '../../helpers/utils';
import tamagotchiData from '../../helpers/data/tamagotchiData';
import progress from '../progress/progress';
import './play.scss';

const createPlaySection = () => {
  const myTamagotchi = tamagotchiData.getTamagotchi();
  let domString = '';
  domString += '<div class="play">';
  domString += '<h2>Play</h2>';
  domString += `<p>Fun: ${myTamagotchi.fun}</p>`;
  domString += '<button id="super-fun">Super Fun</button>';
  domString += '<button id="slightly-fun">Slightly Fun</button>';
  domString += '</div>';
  utils.printToDom('play', domString);
  const superFun = () => {
    if (myTamagotchi.fun < 50) {
      myTamagotchi.fun += 50;
    } else if (myTamagotchi.fun > 49 && myTamagotchi.fun < 100) {
      myTamagotchi.fun = 100;
    }
    progress.printProgress();
    createPlaySection();
  };
  const slightlyFun = () => {
    if (myTamagotchi.fun <= 98) {
      myTamagotchi.fun += 2;
    }
    progress.printProgress();
    createPlaySection();
  };
  $('#super-fun').click(superFun);
  $('#slightly-fun').click(slightlyFun);
};

export default { createPlaySection };
