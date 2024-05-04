const utils = {
  numComponentsMap: {
    value: {
      'SCALAR': 1,
      'VEC2': 2,
      'VEC3': 3,
    },

    get(key) {
      return this.value[key];
    }
  },

  calcMatrix(mat, { translation, rotation, scale }) {
    const matrix = mat.create();
    mat.fromRotationTranslationScale(matrix, 
      rotation, translation, scale);
    return matrix;
  },

  degToRad(value) {
    return value * Math.PI / 180;
  },

  getNumComponentsOf(attrType) {
    return utils.numComponentsMap.get(attrType);
  }
};