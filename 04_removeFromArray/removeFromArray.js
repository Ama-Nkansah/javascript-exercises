const removeFromArray = function(array,...anyargs) {
  const arrayStored = array.filter(item => !anyargs.includes(item));
    return arrayStored ;
};

// Do not edit below this line
module.exports = removeFromArray;
