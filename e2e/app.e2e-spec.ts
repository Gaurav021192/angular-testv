import { AngularlearnPage } from './app.po';

describe('angularlearn App', () => {
  let page: AngularlearnPage;

  beforeEach(() => {
    page = new AngularlearnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
