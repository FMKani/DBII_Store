import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/Product';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    public async findByName(nome: string): Promise<Product | undefined> {
        const product = this.findOne({
            where: {
                nome,
            },
        });

        return product;
    }
}
