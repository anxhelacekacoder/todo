import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.scss'
})
export class YoutubeComponent implements OnInit {
  videos:any[] = [];
  
  constructor(
    private sampleService: SampleService
  ){}
  
  ngOnInit(): void {
      this.sampleService.getVideos().subscribe((res:any)=>{
        this.videos = res;
      });
  }
}
