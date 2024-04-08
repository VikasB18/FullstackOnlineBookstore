import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClientService } from '../../../service/http-client.service';
import { User } from '../../../model/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent  implements OnInit {

  @Input()
  user!: User;

  @Output()
  userAddedEvent = new EventEmitter();

  message!: string;
  password!: string;

  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit() {
    // TODO document why this method 'ngOnInit' is empty
  
  }

  addUser() {
    this.httpClientService.addUser(this.user).subscribe(
      (user) => {
        this.userAddedEvent.emit();
        this.router.navigate(['admin', 'users']);
      }
    );
  }

}
