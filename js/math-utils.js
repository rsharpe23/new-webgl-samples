const mathUtils = {
  calcMatrix(mat, { translation, rotation, scale }) {
    const matrix = mat.create();
    mat.fromRotationTranslationScale(matrix, 
      rotation, translation, scale);
    return matrix;
  },

  degToRad(angle) {
    return angle * Math.PI / 180;
  },
};