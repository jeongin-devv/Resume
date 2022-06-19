import { observable, action } from 'mobx';

export interface Menu{
  profile: boolean;
  chatterbox: boolean;
  Technology: boolean;
  [prop:string]: boolean;
}

interface MenuStore {
  menuObject: Menu;
  // eslint-disable-next-line no-unused-vars
  menuHandler(menuName: string) : void;
}

const menuStore = observable<MenuStore>({
  menuObject: {
    profile: true,
    chatterbox: false,
    Technology: false,
  },

  menuHandler: action((menuName: string) => {
    const menuObj = menuStore.menuObject;
    // eslint-disable-next-line no-return-assign
    Object.keys(menuObj).forEach((key) => (
      key === menuName
        ? menuObj[key] = true
        : menuObj[key] = false
    ));
  }),
});

export { menuStore };
