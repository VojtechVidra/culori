/*
	Cosine interpolation
	--------------------

	Reference: 

		http://paulbourke.net/miscellaneous/interpolation/
 */

import identity from '../util/identity';
import lerp from './lerp';
import easeInOutSine from '../easing/inOutSine';
import gamma from '../easing/gamma';
import { interpolatorPiecewise } from './piecewise';

// @deprecated
export default (fixup, γ = 1) => arr => {
	let ease = gamma(γ);
	let interpolator = interpolatorPiecewise((a, b, t) =>
		lerp(a, b, easeInOutSine(t))
	)((fixup || identity)(arr));
	return t => interpolator(ease(t));
};