// case sensitive traversal orders
const keyTraversals = {
  asc: (obj) =>
    Object.keys(obj).sort((a, b) => {
      const aComp = isNaN(a) ? a : parseInt(a);
      const bComp = isNaN(b) ? b : parseInt(b);

      // note, objects can't have duplicate keys of the same case
      if (aComp > bComp) {
        return 1;
      }

      return -1;
    }),
  desc: (obj) =>
    Object.keys(obj).sort((a, b) => {
      const aComp = isNaN(a) ? a : parseInt(a);
      const bComp = isNaN(b) ? b : parseInt(b);

      // note, objects can't have duplicate keys of the same case
      if (aComp < bComp) {
        return 1;
      }

      return -1;
    }),
};

module.exports = keyTraversals;
