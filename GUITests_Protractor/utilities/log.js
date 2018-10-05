"use strict";
const winston = require("winston");
exports.winston = winston;
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, { timestamp: true });
winston.add(winston.transports.File, { filename: 'winston-basic.log' });
//winston.level="debug";
//# sourceMappingURL=log.js.map