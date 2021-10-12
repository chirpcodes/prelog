// Colours list

const Cl = {
	Reset: "\x1b[0m",
	Black: "\x1b[30m",
	Red: "\x1b[31m",
	Green: "\x1b[32m",
	Yellow: "\x1b[33m",
	Blue: "\x1b[33m",
	Magenta: "\x1b[35m",
	Cyan: "\x1b[36m",
	White: "\x1b[37m"
};

// Class

class Logger {
	constructor() {}

	add(key, text, colour) {
		if (this[key])
			return false;

		if (!text)
			text = key;
		
		colour = colour in Cl ? Cl[colour] : colour;
		
		return this[key] = function(...args) {
			let pre = text;
			if (text) {
				if (colour)
					pre = `${colour}${pre}${Cl.Reset} `;
			}

			const print = [];
			if (pre != null)
				print.push(pre);
			
			for (let i = 0; i<args.length; i++) {
				let arg = args[i];
				if (!arg.startsWith("\x1b[") && i < args.length - 1)
					arg = arg.toString() + " ";
				print.push(arg);
			}
			print.push(Cl.Reset);

			console.log(print.join(""));
		};
	}
}

module.exports = {Cl, Logger};