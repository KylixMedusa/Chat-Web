import { observable, action } from "mobx";

export default class ProfileStore {
    @observable avatar:string =  "";
    @observable name:string =  "";
    @observable status:string =  "";
    @observable phone:string =  "";

    constructor(){
        this.init();
    }

    @action.bound
    init(){
        this.avatar =  "https://cliko.in/assets/team/aayush.jpg";
        this.name =  "Aayush Agarwal";
        this.status =  "Can't talk chat only";
        this.phone =  "+91 9679883985";
    }

    @action
    updateAvatar(src:string){
        this.avatar = src;
    }
    @action
    updateName(name:string){
        this.name = name;
    }
    @action
    updateStatus(status:string){
        this.status = status;
    }
    @action
    updatePhone(phone:string){
        this.phone = phone;
    }
}
