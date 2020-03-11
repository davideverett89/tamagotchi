import utils from '../../helpers/utils';
import tamagotchiData from '../../helpers/data/tamagotchiData';
import './picture.scss';

const pictureBuilder = () => {
  const myTamagotchi = tamagotchiData.getTamagotchi();
  let domString = '';
  domString += `<img src="${myTamagotchi.picture}" alt="My Tamagotchi"/>`;
  utils.printToDom('pet', domString);
};

export default { pictureBuilder };
