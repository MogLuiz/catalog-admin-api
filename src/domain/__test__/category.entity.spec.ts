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

  it('Should create a new category with correct data', () => {
    const date = new Date();

    const category = new Category({
      name: 'Movie',
      description: 'Movies category',
      is_active: false,
      created_at: date
    });

    expect(category.name).toEqual('Movie');
    expect(category.description).toEqual('Movies category');
    expect(category.category_id).toBeUndefined();
    expect(category.is_active).toBeFalsy();
    expect(category.created_at).toEqual(date);
  })

  it('Should change category name', () => {
    const category = Category.create({ name: 'Movie' });

    category.changeName('Games');

    expect(category.name).toEqual('Games');
  })

  it('Should change category description', () => {
    const category = Category.create({ name: 'Movie' });

    category.changeDescription('Games category');

    expect(category.description).toEqual('Games category');
  })

  it('Should activate category', () => {
    const category = Category.create({ name: 'Movie' });

    category.deactivate();
    category.activate();

    expect(category.is_active).toBeTruthy();
  })

  it('Should deactivate category', () => {
    const category = Category.create({ name: 'Movie' });

    category.deactivate();

    expect(category.is_active).toBeFalsy();
  })
})