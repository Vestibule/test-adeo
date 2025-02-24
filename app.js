import { countChildren } from './countChildren.js';
import { data } from './data.js'
import { filterCountries } from './filterCountries.js';

function main() {
	const args = process.argv.slice(2);

	const filterArg = args.find(arg => arg.startsWith('--filter='));
	const filterPattern = filterArg?.split('=')[1];
	const count = args.includes('--count');

	let result;
	if (filterPattern) {
		result = filterCountries(data, filterPattern);
	} else if (count) {
		result = countChildren(data);
	} else {
		console.error('Error: Please specify either --filter or --count');
		process.exit(1);
	}

	console.log(JSON.stringify(result, null, 2));
}

main();