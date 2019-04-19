import { Component, ViewChild, ElementRef } from '@angular/core';

// import {} from './../assets/images/play.svg'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-apps';
  playpause = 'play'
  videLink = 'https://www.youtube.com/watch?v=yx-HYerClEA'
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  videoWidth;

  constructor(private elementRef:ElementRef){}

  ngAfterViewInit(){
    this.videoplayer.nativeElement.addEventListener('timeupdate', this.onClick.bind(this));
  }

  onClick(event){
    // console.log("event",event);
    let juice = this.videoplayer.nativeElement.currentTime / this.videoplayer.nativeElement.duration;
    // console.log("juice =>",(juice*100+'%'));
    this.videoWidth = juice*100+'%';

    if(this.videoplayer.nativeElement.ended){
      this.playpause = 'play'
    }

  }

  toggleVideo(event: any) {
    // console.log("check")
    if( this.videoplayer.nativeElement.paused){
      this.videoplayer.nativeElement.play();
      this.playpause = 'pause';
    }
    else{
      this.videoplayer.nativeElement.pause();
      this.playpause = 'play'
    }

}

}
