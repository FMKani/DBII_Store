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

        if (!product) {
            throw new AppError('Product not found.');
        }

        const productExists = await productsRepository.findByName(nome);

        if (productExists) {
            throw new AppError('There is already one product with this name');
        }

        product.nome = nome;
        product.preco = preco;
        product.quant = quant;

        await productsRepository.save(product);

        return product;
    }
}

export default UpdateProductService;
