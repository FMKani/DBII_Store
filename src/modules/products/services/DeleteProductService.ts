import RedisCache from '@shared/cache/RedisCache';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/productsRepository';

interface Request {
    id: string;
}

class DeleteProductService {
    public async execute({ id }: Request): Promise<void> {
        const productsRepository = getCustomRepository(ProductRepository);

        const product = await productsRepository.findOne(id);

        if (!product) {
            throw new AppError('Product not found.');
        }

        const redisCache = new RedisCache();

        await redisCache.invalidate('PRODUCT_LIST');

        await productsRepository.remove(product);
    }
}

export default DeleteProductService;
