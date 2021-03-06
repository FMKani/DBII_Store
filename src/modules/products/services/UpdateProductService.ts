import RedisCache from '@shared/cache/RedisCache';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/productsRepository';

interface IRequest {
    id: string;
    nome: string;
    preco: number;
    quant: number;
}

class UpdateProductService {
    public async execute({
        id,
        nome,
        preco,
        quant,
    }: IRequest): Promise<Product> {
        const productsRepository = getCustomRepository(ProductRepository);

        const product = await productsRepository.findOne(id);

        const productExists = await productsRepository.findByName(nome);

        if (!product) {
            throw new AppError('Product not found.');
        }

        if (productExists) {
            throw new AppError('There is already one product with this name');
        }

        const redisCache = new RedisCache();

        await redisCache.invalidate('PRODUCT_LIST');

        product.nome = nome;
        product.preco = preco;
        product.quant = quant;

        await productsRepository.save(product);

        return product;
    }
}

export default UpdateProductService;
