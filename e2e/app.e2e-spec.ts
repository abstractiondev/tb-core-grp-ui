import { TbCoreGrpUiPage } from './app.po';

describe('tb-core-grp-ui App', function() {
  let page: TbCoreGrpUiPage;

  beforeEach(() => {
    page = new TbCoreGrpUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
