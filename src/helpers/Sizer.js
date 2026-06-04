import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const hSize = (size, factor = 1) => moderateScale(size, factor);
const vSize = size => verticalScale(size);
const fS = size => scale(size);

export default { fS, vSize, hSize };
