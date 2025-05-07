import chObject from './chObject';
import chSpells from './chSpells';
import chActions from './chActions';

const character = {
  ...chObject,
  spells: chSpells,
  actions: chActions
};

export default character;