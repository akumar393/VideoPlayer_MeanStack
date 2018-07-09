import {Component} from 'angular2/core';
import {Video} from "./video";

@Component({
    selector : 'playlist',
    templateURL : 'app/ts/playlist.component.html',
    inputs : ['videos']
})

export class PlaylistComponent {

    onSelect(vid: Video){
        console.log(JSON.stringify(vid));
    }
}