
const winston = require('winston');
const { combine, timestamp, prettyPrint } = winston.format;

const logger = winston.createLogger({
    level: 'info',
    defaultMeta: { service: 'profile' },
    format:combine(
      timestamp(),
      prettyPrint()
    ),
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.Console({
          format: winston.format.logstash(),
      }),
      // new winston.transports.File({ filename: 'error.log', level: 'error' }),
      // new winston.transports.File({ filename: 'combined.log' }),
    ],
});
// if (process.env.NODE_ENV !== 'production') {
//     logger.add(new winston.transports.Console({
//         format: winston.format.logstash(),
//     }));
// }

module.exports = logger