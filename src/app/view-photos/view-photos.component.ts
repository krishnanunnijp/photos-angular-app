import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-photos',
  templateUrl: './view-photos.component.html',
  styleUrls: ['./view-photos.component.css']
})
export class ViewPhotosComponent {

constructor(private api:ApiService){

  api.fetchPhotos().subscribe(
    (readValue)=>{
      this.data=readValue
    }
  )
}
data:any =[]
}
