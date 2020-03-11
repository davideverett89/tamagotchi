import utils from '../../helpers/utils';
import tamagotchiData from '../../helpers/data/tamagotchiData';
import progress from '../progress/progress';
import './fight.scss';

const createFightSection = () => {
  const randomNum = Math.floor(Math.random() * 100);
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
    if (myTamagotchi.strength < (100 - randomNum)) {
      myTamagotchi.strength += randomNum;
    } else if (myTamagotchi.strength > ((100 - randomNum) - 1) && myTamagotchi.strength < 100) {
      myTamagotchi.strength = 100;
    }
    $('#pet').animate({
      left: '50px',
    });
    progress.printProgress();
    createFightSection();
  };
  const attack = () => {
    if (myTamagotchi.strength > randomNum) {
      myTamagotchi.strength -= randomNum;
    } else if (myTamagotchi.strength < randomNum && myTamagotchi.strength > 0) {
      myTamagotchi.strength = 0;
    }
    $('#pet').animate({
      left: '1500px',
    });
    progress.printProgress();
    createFightSection();
  };
  $('#run').click(run);
  $('#attack').click(attack);
};

export default { createFightSection };
