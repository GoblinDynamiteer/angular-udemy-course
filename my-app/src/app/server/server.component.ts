import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 10;
    serverOnline = Math.random(); /** 0 - 1, floating point random number */

    getServerStatus() {
        return this.serverOnline > 0.5 ? 'online' : 'offline';
    }
}
