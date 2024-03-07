const winston = require("winston");
require("winston-daily-rotate-file");
// le faomat de log
const logFormat = winston.format.printf(({level,message,timestamp})=>{
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});
const transport = new winston.transports.DailyRotateFile({
    filename: 'logs/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxSize: '20m',
    maxFiles: '14d',
});
const logger = winston.createLogger({
    level:'error',
    format: winston.format.combine(
        winston.format.timestamp({format: 'YYYY-MM-DD'}),
        winston.format.json(),
        logFormat
    ),
    transports: [
        transport,
        new winston.transports.Console(),
    ],
});
module.exports=logger;