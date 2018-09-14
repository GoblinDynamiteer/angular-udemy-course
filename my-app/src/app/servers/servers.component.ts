import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverName = 'DefaultServerName';

  constructor() {
    setTimeout(() => {this.allowNewServer = true; }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    /** Explicitly casting to HTMLInputElement */
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
