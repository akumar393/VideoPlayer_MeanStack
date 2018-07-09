import {Component} from 'angular2/core';
import {Config} from "./config.service";
import  {PlaylistComponent} from "./playlist.component";
import {Video} from "./video";

@Component({
    selector: 'my-app',
    templateURL : 'app/ts/app.component.html',
    directives : [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos: Array<Video>;

    constructor(){
        this.videos = [
            new Video(1, 'What is Indominus rex a hybrid of?','TgaB4Psza_U', 'Indominus rex desc'),
            new Video (2,'The History of the Spinosaurus in the Jurassic Park Franchise','U-yE8hbvJvo','Damn the spinosaurus')
        ]
    }
}
