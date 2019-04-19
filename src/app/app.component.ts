import { Component, ViewChild, ElementRef } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

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
  bufferWidth;


  constructor(private elementRef:ElementRef){}

  ngAfterViewInit(){
    this.videoplayer.nativeElement.addEventListener('timeupdate', this.onClick.bind(this));
    // this.videoplayer.nativeElement.onprogress = function(){
      // this.bufferWidth =this.videoplayer.nativeElement.buffered.end(0)+'%';
      // var w = 100*(track.buffered.end(0))/track.duration;
      // $('#buffered').css("width",w+"%");
    // }
    // this.bufferWidth =this.videoplayer.nativeElement.buffered.end(0)+'%';
    // this.bufferCreate();

  }

  onClick(event){

    this.bufferWidth = this.videoplayer.nativeElement.buffered.end(0)+'%';

    let juice = this.videoplayer.nativeElement.currentTime / this.videoplayer.nativeElement.duration;
    // console.log("juice =>",(juice*100+'%'));
    this.videoWidth = juice*100+'%';

    if(this.videoplayer.nativeElement.ended){
      this.playpause = 'play';
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
