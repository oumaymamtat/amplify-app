import { Component } from '@angular/core';
import Auth from '@aws-amplify/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amplify-app';
  constructor(){
    Auth.currentAuthenticatedUser().then(console.log)
  }
}
