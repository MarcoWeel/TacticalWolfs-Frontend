import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  formBuilder: FormBuilder;
  EventForm: FormGroup;
  constructor(private http: HttpClient) {}

  SERVER_URL = 'http://localhost:5014/event';
  ngOnInit(): void {
    this.EventForm = new FormGroup({
      name: new FormControl(),
      location: new FormControl(),
    });
  }

  // onName(event) {
  //   if (event.target.name.length > 0) {
  //     const name = event.target.files[0];
  //     this.EventForm.get('name').setValue(name);
  //   }
  // }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.EventForm.get('name').value);
    this.http.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
