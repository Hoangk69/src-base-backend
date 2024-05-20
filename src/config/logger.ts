import { createLogger, format, transports } from 'winston';
const { combine, colorize, align, simple } = format;

const logger = createLogger({
    format: combine(
        process.env.NODE_ENV == 'development' ? colorize() : align(),
        simple()
    ),
    transports: [new transports.Console()],
});

export { logger };
