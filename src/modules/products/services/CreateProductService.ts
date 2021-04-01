import RedisCache from '@shared/cache/RedisCache';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/productsRepository';

interface Request {
    nome: string;
    preco: number;
    quant: number;
}

class CreateProductService {
    public async execute({ nome, preco, quant }: Request): Promise<Product> {
        const ProductsRepository = getCustomRepository(ProductRepository);
        const productExists = await ProductsRepository.findByName(nome);

        if (productExists) {
            throw new AppError('Já existe um produto com esse nome');
        }

        const redisCache = new RedisCache();

        const product = ProductsRepository.create({
            nome,
            preco,
            quant,
        });

        await redisCache.invalidate('PRODUCT_LIST');

        await ProductsRepository.save(product);

        return product;
    }
}

export default CreateProductService;
