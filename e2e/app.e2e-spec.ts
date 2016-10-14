import { DokulatinoPage } from './app.po';

describe('dokulatino App', function() {
  let page: DokulatinoPage;

  beforeEach(() => {
    page = new DokulatinoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
