import utils from '../helpers/utils';
import creatureData from '../helpers/data/creatureData';

const createPlaySection = () => {
  const myTamagotchi = creatureData.getCreature();
  let domString = '';
  domString += '<div>';
  domString += '<h2>Play</h2>';
  domString += `<p>Fun: ${myTamagotchi.fun}</p>`;
  domString += '<button id="super-fun">Super Fun</button>';
  domString += '<button id="slightly-fun">Slightly Fun</button>';
  domString += '</div>';
  utils.printToDom('play', domString);
  const superFun = () => {
    const funMeter = myTamagotchi.fun;
    if (funMeter < 50) {
      myTamagotchi.fun += 50;
    } else if (funMeter > 49 && funMeter < 100) {
      myTamagotchi.fun = 100;
    }
    createPlaySection();
  };
  const slightlyFun = () => {
    const funMeter = myTamagotchi.fun;
    if (funMeter <= 98) {
      myTamagotchi.fun += 2;
    }
    createPlaySection();
  };
  $('#super-fun').click(superFun);
  $('#slightly-fun').click(slightlyFun);
};

export default { createPlaySection };
