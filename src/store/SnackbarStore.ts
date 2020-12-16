import { observable, action } from "mobx";

export default class SnackbarStore {
  @observable snackbars: string[] = [];

  @action.bound
  async addSnackbar(message: string) {
    let temp = [...this.snackbars];
    temp.push(message);
    this.snackbars = [...temp];
    if (this.snackbars.length > 3) {
      this.pop();
    }
    // await new Promise(r=>{setTimeout(r,3000)});
    // this.pop();
  }

  @action.bound
  pop() {
    let temp = [...this.snackbars];
    if(this.snackbars.length > 1)
        this.snackbars = [...temp.slice(1)];
    else{
        this.snackbars = [];
    }
  }
}
