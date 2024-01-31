import { Category } from './../category.entity';

describe('Category Unit Tests', () => {


  it('Should create a new category with default values', () => {
    const category = Category.create({ name: 'Movie' });

    expect(category.name).toEqual('Movie');
    expect(category.description).toBeNull();
    expect(category.category_id).toBeUndefined();
    expect(category.is_active).toBeTruthy();
    expect(category.created_at).toBeInstanceOf(Date);
  })
})