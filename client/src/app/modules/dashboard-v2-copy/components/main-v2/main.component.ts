import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public username: string;
  public clickedEvent: String;
  public totalTypesArray = [];
  public nodeLimitValue = null;
  public newNodeCreated: String;
  constructor(
    private route: ActivatedRoute
  ) {
    console.log(this.route.snapshot.params.name);
    this.username = this.route.snapshot.params.name;
  }

  ngOnInit() {
  }

  childEventClicked(event: String) {
    this.clickedEvent = event;
  }
  childEventClicked2(event: String) {
    this.newNodeCreated = event;
  }

  sendTypes(event) {
    if (!!event && event.length > 0) {
      this.totalTypesArray = event;
    }
  }

  sendLimitToSidebar(event) {
    // this  function is responsible to send the nodeLimit value to the sidebar so that apply function can be clicked
    if (!isNaN(event)) {
      this.nodeLimitValue = event;
    } else {
      console.log('nodelimit is not a number');
      this.nodeLimitValue = null;
    }
  }

}
