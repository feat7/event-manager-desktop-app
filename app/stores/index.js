import { RouterStore } from "mobx-react-router";
// import { create } from "mobx-persist";
// import clientPersist from "client-persist";
import UIStore from "./ui";

class Store {
  constructor() {
    this.ui = new UIStore(this);
    this.routing = new RouterStore();
  }
}

const store = new Store();
export default store;

// clientPersist.setDriver(clientPersist.SESSIONSTORAGE);

// const hydrate = create({
//   storage: clientPersist
// });

// const p1 = hydrate("ISPsData", store.ui);
// const p2 = hydrate("fetchedFromPersist", store.ui);

// Promise.all([p1, p2])
//   .then(() => {
//     store.ui.fetchedFromPersist = true;
//     return console.log("Hydration complete");
//   })
//   .catch(e => console.error(e.message));
