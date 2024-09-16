class exportClass {
    static C = class {
        static black = "\x1b[30m";
        static red = "\x1b[31m";
        static green = "\x1b[32m";
        static yellow = "\x1b[33m";
        static blue = "\x1b[34m";
        static magenta = "\x1b[35m";
        static cyan = "\x1b[36m";
        static white = "\x1b[37m";
        static gray = "\x1b[90m";
    }
    static CB = class {
        static black = "\x1b[40m";
        static red = "\x1b[41m";
        static green = "\x1b[42m";
        static yellow = "\x1b[43m";
        static blue = "\x1b[44m";
        static magenta = "\x1b[45m";
        static cyan = "\x1b[46m";
        static white = "\x1b[47m";
        static gray = "\x1b[100m";
    }
    static R = "\x1b[0m";
    static print = (...data) => console.log(data.join(""));
    /**
     * Prints a colored message to the console.
     * @param {Array} data e.g. [{text: "abc: "}, {text: "xyz", color: "yellow", bgColor: "blue"}]
     */
    static printc = function (data) {
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

module.exports = exportClass;
