import { AngularTourOfHeroes1Page } from './app.po';

describe('angular-tour-of-heroes1 App', () => {
  let page: AngularTourOfHeroes1Page;

  beforeEach(() => {
    page = new AngularTourOfHeroes1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
