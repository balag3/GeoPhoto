import { GeophotoFrontendPage } from './app.po';

describe('geophoto-frontend App', () => {
  let page: GeophotoFrontendPage;

  beforeEach(() => {
    page = new GeophotoFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
