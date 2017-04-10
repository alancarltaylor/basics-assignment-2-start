import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	userName = '';
	userNameBlank = true;

	checkIfUserNameIsBlank(){
		if (this.userName === ''){
			this.userNameBlank = true;
		} else {
			this.userNameBlank = false;
		}
	}

	onBlankify(){
		this.userName = '';
	}
}
