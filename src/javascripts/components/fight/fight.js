import utils from '../../helpers/utils';
import tamagotchiData from '../../helpers/data/tamagotchiData';
import progress from '../progress/progress';
import './fight.scss';

const createFightSection = () => {
  const myTamagotchi = tamagotchiData.getTamagotchi();
  let domString = '';
  domString += '<div class="fight">';
  domString += '<h2>Fight</h2>';
  domString += `<p>Strength: ${myTamagotchi.strength}</p>`;
  domString += '<button id="run">Run</button>';
  domString += '<button id="attack">Attack</button>';
  domString += '</div>';
  utils.printToDom('fight', domString);
  const run = () => {
    if (myTamagotchi.strength <= 99) {
      myTamagotchi.strength += 1;
    }
    progress.printProgress();
    createFightSection();
  };
  const attack = () => {
    if (myTamagotchi.strength >= 10) {
      myTamagotchi.strength -= 10;
    } else if (myTamagotchi.strength < 10 && myTamagotchi.strength > 0) {
      myTamagotchi.strength = 0;
    }
    progress.printProgress();
    createFightSection();
  };
  $('#run').click(run);
  $('#attack').click(attack);
};

export default { createFightSection };
