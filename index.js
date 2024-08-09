class Prints {
    /**
     * Prints a colored message to the console.
     * @param {*} data Anything that's prinatable.
     * @param {String} textColor A color in string format. (None: White)
     * @param {String} backgroundColor A color in string format.
     * Possible Colors: Black, Red, Green, Yellow, Blue, Magenta, Cyan, White, Gray.
     */
    static print = function(data, textColor, backgroundColor) {
        const colorCodes = {
            black: 30,
            red: 31,
            green: 32,
            yellow: 33,
            blue: 34,
            magenta: 35,
            cyan: 36,
            gray: 90
        };

        const colorCode = colorCodes[textColor] || 37;
        const bgColor = (colorCodes[backgroundColor] || -10) + 10;

        console.log(`${bgColor != 0 ? "\x1b[" + bgColor + "m" : ""}\x1b[${colorCode}m%s\x1b[0m`, data);
    }
    /**
     * Prints a colored message to the console.
     * @param {Array} data e.g. [{text: "abc: "}, {text: "xyz", color: "yellow", bgColor: "blue"}]
     */
    static printc = function(data) {
        const colorCodes = {
            black: 30,
            red: 31,
            green: 32,
            yellow: 33,
            blue: 34,
            magenta: 35,
            cyan: 36,
            gray: 90
        };

        let logString = "";

        data.forEach(e => {
            const colorCode = colorCodes[e.color] || 37;
            const bgColor = (colorCodes[e.bgColor] || -10) + 10;
        
            logString += `\x1b[${bgColor}m\x1b[${colorCode}m${e.text}\x1b[0m`;
        });

        console.log(logString);
    }
}

module.exports = Prints;
