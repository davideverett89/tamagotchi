const myTamagotchi = {
  name: 'David',
  full: 100,
  fun: 50,
};

const getCreature = () => myTamagotchi;

const setCreatureProperty = (_prop, value) => {
  myTamagotchi.prop = value;
};

export default { getCreature, setCreatureProperty };
