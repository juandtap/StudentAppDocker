import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentAppDocker';

  students : any = []
  addStudent(student: any){
    this.students.push(student)
  }

}
