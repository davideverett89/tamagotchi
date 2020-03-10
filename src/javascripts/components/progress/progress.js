import tamagotchiData from '../../helpers/data/tamagotchiData';
import utils from '../../helpers/utils';
import './progress.scss';

const printProgress = () => {
  const myTamagotchi = tamagotchiData.getTamagotchi();
  const average = ((myTamagotchi.energy + myTamagotchi.full + myTamagotchi.fun + myTamagotchi.strength) / 4);
  let domString = '';
  domString += '<div class="progress-section">';
  domString += '<label for="average">Average Health:</label>';
  domString += `<progress id="average" value="${average}" max="100"></progress>`;
  domString += '</div>';
  utils.printToDom('progress', domString);
};

export default { printProgress };
