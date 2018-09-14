import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 10;
    serverOnline = true;

    getServerStatus() {
        return this.serverOnline ? 'online' : 'offline';
    }
}
