import test from 'ava';
import execa from 'execa';

test('main', async t => {
	let returnValue;

	try {
		const {stdout} = await execa('./cli.js');
		returnValue = stdout;
	} catch (error) {
		const {stderr} = error;
		returnValue = stderr;
	}

	t.regex(returnValue, /down|up/);
});
