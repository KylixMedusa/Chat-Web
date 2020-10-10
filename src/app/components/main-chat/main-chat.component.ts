import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.scss']
})
export class MainChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.chatGenerator();
  }

  
message = [
  {
      type:'right',
      text:"Hi",
      time:'19:58'
  },{
      type:'left',
      text:"👋 Greetings from Tata Altroz. Think of me as your genie but first let's get to know each other. Shall we? Tell me what piques your interest?",
      time:'19:58'
  },
  {
      type:'right',
      text:"I watn to kno abt your interiors",
      time:'19:58'
  },{
      type:'left',
      text:"My tastefully crafted interiors are premium, comfortable, and spacious. The blue ambient lighting around the dashboard gives you a feeling of serenity. Once you're in, you might never want to leave. Shoot your next question",
      time:'19:59'
  },{
      type:'right',
      text:"Can u tell me something about your seatng arrngmnt?",
      time:'19:59'
  },{
      type:'left',
      text:"No matter how much your friends love me, only 5 can fit in. So... I suggest drawing chits to figure who's taking a cab. It's fun interacting with you. What else can I tell you about myself?",
      time:'19:59'
  },{
      type:'right',
      text:"How many colors do you have?",
      time:'19:59'
  },{
      type:'left',
      text:"I come in 3 more colors than Ranveer. They are Downtown Red, Midtown Grey, High-street Gold, Avenue White, and Skyline Silver. Bring on the next question.",
      time:'19:59'
  },{
      type:'right',
      text:"I want to book a test drive",
      time:'19:59'
  },{
      type:'left',
      text:"Well played! Let's get you started right away..",
      time:'19:59'
  },
]

async chatGenerator(){
  var chatList = document.getElementById('chat-list');
  var charContainer = document.getElementById('chat-container');
  for(let node of this.message){
      let loader = document.createElement('div');
      if(node.type == 'right'){
          loader.setAttribute('class','message-right spinner');
      }
      else{
          loader.setAttribute('class','message-left spinner');
      }
      let bounce1 = document.createElement('div');
      bounce1.setAttribute('class','bounce1');
      let bounce2 = document.createElement('div');
      bounce2.setAttribute('class','bounce2');
      let bounce3 = document.createElement('div');
      bounce3.setAttribute('class','bounce3');
      loader.appendChild(bounce1);
      loader.appendChild(bounce2);
      loader.appendChild(bounce3);
      var promise = await new Promise((r)=>{setTimeout(r,1000)});
      chatList.appendChild(loader);
      charContainer.scrollTo({
          top: 200000
      });
      let item = document.createElement('div');
      let img = document.createElement('img');
      if(node.type == 'right'){
          img.src = "assets/8.jpg";
          item.setAttribute('class','message-right');
      }
      else{
          img.src="assets/7.jpg";
          item.setAttribute('class','message-left');
      }
      item.appendChild(img);
      let text = document.createElement('span');
      text.setAttribute('class','message-text');
      text.innerText = node.text;
      let time = document.createElement('span');
      time.setAttribute('class','message-time');
      time.innerText = node.time;
      text.appendChild(time);
      item.appendChild(text);
      var promise = await new Promise((r)=>{setTimeout(r,2000)});
      chatList.removeChild(loader);
      chatList.appendChild(item);
      charContainer.scrollTo({
          top: 200000
      });
  }
}

}
