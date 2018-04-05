let tape = require('tape');
let culori = require('../');
let { hsi, rgb } = culori;

tape("rgb() converts from HSI to RGB", function(test) {

	test.deepEqual(
		rgb( hsi({ h: 0, s: 0, i: 0 }) ), 
		{ r: 0, g: 0, b: 0, mode: 'rgb' }, 
		'lightness 0 should yield black'
	);

	test.deepEqual(
		rgb( hsi({ h: 60, s: 0.25, i: 0 }) ), 
		{ r: 0, g: 0, b: 0, mode: 'rgb' }, 
		'...regardless of hue and saturation'
	);

	test.deepEqual(
		rgb( hsi({ h: 0, s: 0, i: 0.5 }) ), 
		{ r: 0.5, g: 0.5, b: 0.5, mode: 'rgb' }, 
		'saturation 0 should yield gray'
	);

	test.deepEqual(
		rgb( hsi({ h: 60, s: 0, i: 0.25 }) ), 
		{ r: 0.25, g: 0.25, b: 0.25, mode: 'rgb' }, 
		'...regardless of the hue'
	);

	test.deepEqual(
		rgb( hsi({ h: 100, s: 0, i: 0.5 }) ), 
		{ r: 0.5, g: 0.5, b: 0.5, mode: 'rgb' }, 
		'...or the lightness'
	);

	test.end();

});

tape('hsi() converts RGB to HSI', function(test) {

	test.deepEqual(
		hsi( rgb({ r: 0, g: 0, b: 0 }) ), 
		{ s: 0, i: 0, mode: 'hsi' }, 
		'black'
	);

	test.deepEqual(
		hsi( rgb({ r: 0.25, g: 0.25, b: 0.25 }) ), 
		{ s: 0, i: 0.25, mode: 'hsi' }, 
		'R = G = B yields undefined hue'
	);

	test.deepEqual(
		hsi( rgb({ r: 0.6, g: 0.6, b: 0.6 }) ), 
		{ s: 0, i: 0.6, mode: 'hsi' }, 
		'R = G = B yields zero saturation'
	);
	
	test.deepEqual(
		hsi( rgb({ r: 1, g: 0, b: 0 }) ), 
		{ h: 0, s: 1, i: 0.3333333333333333, mode: 'hsi' }, 
		'red'
	);

	test.deepEqual(
		hsi( rgb({ r: 1, g: 1, b: 0 }) ), 
		{ h: 60, s: 1, i: 0.6666666666666666, mode: 'hsi' }, 
		'yellow'
	);

	test.deepEqual(
		hsi( rgb({ r: 0, g: 1, b: 0 }) ), 
		{ h: 120, s: 1, i: 0.3333333333333333, mode: 'hsi' }, 
		'green'
	);

	test.deepEqual(
		hsi( rgb({ r: 0, g: 1, b: 1 }) ), 
		{ h: 180, s: 1, i: 0.6666666666666666, mode: 'hsi' }, 
		'cyan'
	);

	test.deepEqual(
		hsi( rgb({ r: 0, g: 0, b: 1 }) ), 
		{ h: 240, s: 1, i: 0.3333333333333333, mode: 'hsi' }, 
		'blue'
	);

	test.deepEqual(
		hsi( rgb({ r: 1, g: 0, b: 1 }) ), 
		{ h: 300, s: 1, i: 0.6666666666666666, mode: 'hsi' }, 
		'magenta'
	);

	test.end();
});