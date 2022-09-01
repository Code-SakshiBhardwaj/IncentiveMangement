import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/service/view.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  datatype: string = "";
  data: any;
  constructor(private view: ViewService) {

    this.datatype = history.state.datatype;
    console.log(history.state)
    console.log(this.datatype)
    this.doView()

  }

  ngOnInit(): void {

  }

  doView() {
    console.log("DATA");
    this.view.doView(this.datatype).subscribe(
      response => {
        this.data = response;
        console.log(this.data);
      },
      error => {
        console.log(error);
      }

    )
  }

  update() {
    console.log("update method called ");
    this.view.update(this.datatype, this.data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

  delete(id: any) {
    console.log("delete method called ", id);
    this.view.delete(this.datatype, id).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }
}
