import { RedisOptions } from 'ioredis';

interface CacheConfig {
    config: {
        redis: RedisOptions;
    };
    driver: string;
}

export default {
    config: {
        redis: {
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            password: process.env.REDIS_PASS || undefined,
        },
    },
    driver: 'redis',
} as CacheConfig;
