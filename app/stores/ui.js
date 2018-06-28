import { observable, computed } from "mobx";
// import { persist } from "mobx-persist";

class UIStore {
  @observable electronLoaded = false;

  @observable userDetails = null;

  @observable events = null;

  @observable searchQuery = "";

  @computed
  get isAdmin() {
    if (this.userDetails !== null)
      return (
        typeof this.userDetails !== "undefined" &&
        this.userDetails.user_type === "Admin"
      );
    return false;
  }

  @computed
  get eventsLoaded() {
    if (this.events !== null)
      return typeof this.events !== "undefined" && this.events.length > 0;
    return false;
  }

  @computed
  get loadingValue() {
    if (!this.electronLoaded) return "Loading electron..";
    return "Electron loaded";
  }

  @computed
  get filteredEvents() {
    let filteredArray;
    if (this.searchQuery !== "") {
      filteredArray = this.events.filter(
        item =>
          `${item.name} ${item.location} ${item.event_type} `
            .toLowerCase()
            .search(this.searchQuery.toLocaleLowerCase()) !== -1
      );
    } else return this.events;
    return filteredArray;
  }
}

export default UIStore;
