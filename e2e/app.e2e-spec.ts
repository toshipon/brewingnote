import { BrewingnotePage } from './app.po';

describe('brewingnote App', function() {
  let page: BrewingnotePage;

  beforeEach(() => {
    page = new BrewingnotePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
