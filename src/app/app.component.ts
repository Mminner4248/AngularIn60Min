import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My Title';

  message(value){
    console.log('hello');
  }

  ngOnInit(value){
    this.message(this.title);
  }
}
