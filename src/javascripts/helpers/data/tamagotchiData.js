const myTamagotchi = {
  full: 100,
  fun: 50,
  strength: 100,
  energy: 50,
};

const getTamagotchi = () => myTamagotchi;

const setTamagotchiPicture = (newTamagotchiPicture) => {
  myTamagotchi.picture = newTamagotchiPicture;
};

export default { getTamagotchi, setTamagotchiPicture };
