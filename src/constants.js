const CONTRACT_ADDRESS = '0xb5DAc2dBF6cee9CCDc31090ace3a279b1aE54e06';

const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };
  

export { CONTRACT_ADDRESS, transformCharacterData };