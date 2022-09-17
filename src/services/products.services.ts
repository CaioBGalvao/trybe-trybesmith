import { ProductModel, connection } from '../models';
import { IProduct } from '../interfaces';

class ProductsService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async createProducts(productObj: IProduct): Promise<IProduct> {
    const result = await this.model.create(productObj);
    return result;
  }

  public async getProducts(): Promise<IProduct[]> {
    const result = await this.model.getAll();
    return result;
  }
}

export default ProductsService;