import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hn='';
  sn='';
  ct='';
  pc='';
  //state=false;
  resetFields()
  {
    this.hn='';
    this.sn='';
    this.ct='';
    this.pc='';
  }
 /* checkName()
  {
    if(this.name==='' && this.name1==='' && this.dno==='' && this.city==='')
    {
      this.state=true;
      return this.state;
    }
  }*/
}
