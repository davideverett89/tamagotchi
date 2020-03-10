import utils from '../../helpers/utils';
import tamagotchiData from '../../helpers/data/tamagotchiData';

const pictureBuilder = () => {
  const myTamagotchi = tamagotchiData.getTamagotchi();
  let domString = '';
  domString += `<img src="${myTamagotchi.picture}" alt="My Tamagotchi"/>`;
  utils.printToDom('pet', domString);
};

const getPictureFromUser = () => {
  const newTamagotchiPicture = window.prompt('Insert your Tamagotchi here!');
  tamagotchiData.setTamagotchiPicture(newTamagotchiPicture);
  pictureBuilder();
};

export default { getPictureFromUser };
