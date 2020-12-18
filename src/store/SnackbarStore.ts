import { observable, action } from "mobx";

export default class SnackbarStore {
  @observable snackbars: {message:string, class:string}[] = [];

  @action
  async addSnackbar(message: string) {
    let temp = [...this.snackbars,{message:message, class:""}];
    this.snackbars = [...temp];
    if (this.snackbars.length > 3) {
      this.disappear();
    }
    await new Promise(r=>{setTimeout(r,3000)});
    this.pop();
  }

  @action
  async disappear() {
    let temp = [...this.snackbars];
    temp[0].class = "remove";
    this.snackbars = [...temp];
    await new Promise(r=>{setTimeout(r,500)});
    this.pop();
  }

  @action 
  pop(){
    let temp = [...this.snackbars];
    if(this.snackbars.length > 1)
        this.snackbars = [...temp.slice(1)];
    else{
        this.snackbars = [];
    }
  }
}
