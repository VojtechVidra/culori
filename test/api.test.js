/*
	Keep an eye on the API surface of the various bundles
 */
import tape from 'tape';

import * as full from '../src/index.js';
import * as css from '../src/bootstrap/css.js';
import * as all from '../src/bootstrap/all.js';
import * as fn from '../src/index-fn.js';

const API_FULL = [
	'a98',
	'average',
	'averageAngle',
	'averageNumber',
	'blend',
	'clampChroma',
	'clampRgb',
	'colorsNamed',
	'converter',
	'cubehelix',
	'differenceCie76',
	'differenceCie94',
	'differenceCiede2000',
	'differenceCmc',
	'differenceEuclidean',
	'differenceHueChroma',
	'differenceHueNaive',
	'differenceHueSaturation',
	'differenceHyab',
	'differenceKotsarenkoRamos',
	'displayable',
	'dlab',
	'dlch',
	'easingGamma',
	'easingInOutSine',
	'easingMidpoint',
	'easingSmootherstep',
	'easingSmoothstep',
	'filterBrightness',
	'filterContrast',
	'filterDeficiencyDeuter',
	'filterDeficiencyProt',
	'filterDeficiencyTrit',
	'filterGrayscale',
	'filterHueRotate',
	'filterInvert',
	'filterSaturate',
	'filterSepia',
	'fixupAlpha',
	'fixupHueDecreasing',
	'fixupHueIncreasing',
	'fixupHueLonger',
	'fixupHueShorter',
	'formatCss',
	'formatHex',
	'formatHex8',
	'formatHsl',
	'formatRgb',
	'getMode',
	'hsi',
	'hsl',
	'hsv',
	'hwb',
	'interpolate',
	'interpolateWith',
	'interpolateWithPremultipliedAlpha',
	'interpolatorLinear',
	'interpolatorPiecewise',
	'interpolatorSplineBasis',
	'interpolatorSplineBasisClosed',
	'interpolatorSplineMonotone',
	'interpolatorSplineMonotone2',
	'interpolatorSplineMonotoneClosed',
	'interpolatorSplineNatural',
	'interpolatorSplineNaturalClosed',
	'jab',
	'jch',
	'lab',
	'lab65',
	'lch',
	'lch65',
	'lchuv',
	'lerp',
	'lrgb',
	'luv',
	'mapAlphaDivide',
	'mapAlphaMultiply',
	'mapTransferGamma',
	'mapTransferLinear',
	'mapper',
	'modeA98',
	'modeCubehelix',
	'modeDlab',
	'modeDlch',
	'modeHsi',
	'modeHsl',
	'modeHsv',
	'modeHwb',
	'modeJab',
	'modeJch',
	'modeLab',
	'modeLab65',
	'modeLch',
	'modeLch65',
	'modeLchuv',
	'modeLrgb',
	'modeLuv',
	'modeOklab',
	'modeOklch',
	'modeP3',
	'modeProphoto',
	'modeRec2020',
	'modeRgb',
	'modeXyz',
	'modeXyz65',
	'modeYiq',
	'nearest',
	'oklab',
	'oklch',
	'p3',
	'parse',
	'prophoto',
	'random',
	'rec2020',
	'rgb',
	'round',
	'samples',
	'useMode',
	'wcagContrast',
	'wcagLuminance',
	'xyz',
	'xyz65',
	'yiq'
];
const API_CSS = [
	'a98',
	'hsl',
	'hsv',
	'hwb',
	'lab',
	'lab65',
	'lch',
	'lch65',
	'lrgb',
	'p3',
	'prophoto',
	'rec2020',
	'rgb',
	'xyz',
	'xyz65'
];

const API_ALL = [
	'a98',
	'cubehelix',
	'dlab',
	'dlch',
	'hsi',
	'hsl',
	'hsv',
	'hwb',
	'jab',
	'jch',
	'lab',
	'lab65',
	'lch',
	'lch65',
	'lchuv',
	'lrgb',
	'luv',
	'oklab',
	'oklch',
	'p3',
	'prophoto',
	'rec2020',
	'rgb',
	'xyz',
	'xyz65',
	'yiq'
];

const API_FN = [
	'average',
	'averageAngle',
	'averageNumber',
	'blend',
	'clampChroma',
	'clampRgb',
	'colorsNamed',
	'converter',
	'differenceCie76',
	'differenceCie94',
	'differenceCiede2000',
	'differenceCmc',
	'differenceEuclidean',
	'differenceHueChroma',
	'differenceHueNaive',
	'differenceHueSaturation',
	'differenceHyab',
	'differenceKotsarenkoRamos',
	'displayable',
	'easingGamma',
	'easingInOutSine',
	'easingMidpoint',
	'easingSmootherstep',
	'easingSmoothstep',
	'filterBrightness',
	'filterContrast',
	'filterDeficiencyDeuter',
	'filterDeficiencyProt',
	'filterDeficiencyTrit',
	'filterGrayscale',
	'filterHueRotate',
	'filterInvert',
	'filterSaturate',
	'filterSepia',
	'fixupAlpha',
	'fixupHueDecreasing',
	'fixupHueIncreasing',
	'fixupHueLonger',
	'fixupHueShorter',
	'formatCss',
	'formatHex',
	'formatHex8',
	'formatHsl',
	'formatRgb',
	'getMode',
	'interpolate',
	'interpolateWith',
	'interpolateWithPremultipliedAlpha',
	'interpolatorLinear',
	'interpolatorPiecewise',
	'interpolatorSplineBasis',
	'interpolatorSplineBasisClosed',
	'interpolatorSplineMonotone',
	'interpolatorSplineMonotone2',
	'interpolatorSplineMonotoneClosed',
	'interpolatorSplineNatural',
	'interpolatorSplineNaturalClosed',
	'lerp',
	'mapAlphaDivide',
	'mapAlphaMultiply',
	'mapTransferGamma',
	'mapTransferLinear',
	'mapper',
	'modeA98',
	'modeCubehelix',
	'modeDlab',
	'modeDlch',
	'modeHsi',
	'modeHsl',
	'modeHsv',
	'modeHwb',
	'modeJab',
	'modeJch',
	'modeLab',
	'modeLab65',
	'modeLch',
	'modeLch65',
	'modeLchuv',
	'modeLrgb',
	'modeLuv',
	'modeOklab',
	'modeOklch',
	'modeP3',
	'modeProphoto',
	'modeRec2020',
	'modeRgb',
	'modeXyz',
	'modeXyz65',
	'modeYiq',
	'nearest',
	'parse',
	'random',
	'round',
	'samples',
	'useMode',
	'wcagContrast',
	'wcagLuminance'
];

tape('culori', t => {
	t.deepEqual(Object.keys(full).sort(), API_FULL);
	t.end();
});

tape('culori/css', t => {
	t.deepEqual(Object.keys(css).sort(), API_CSS);
	t.end();
});

tape('culori/all', t => {
	t.deepEqual(Object.keys(all).sort(), API_ALL);
	t.end();
});

tape('culori/fn', t => {
	t.deepEqual(Object.keys(fn).sort(), API_FN);
	t.end();
});