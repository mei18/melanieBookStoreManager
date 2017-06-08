import { BookStoreManagerPage } from './app.po';

describe('book-store-manager App', () => {
  let page: BookStoreManagerPage;

  beforeEach(() => {
    page = new BookStoreManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
