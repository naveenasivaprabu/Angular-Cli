import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  myName = "My Name Value Dynamic";
  innerHtmlValue = "<h7>Hello World !!</h7>";
  profile;
  constructor() { }

  ngOnInit() {
  }

  submit(){
    alert('Submitted');
    this.profile="Value chnage from class"
  }

}
