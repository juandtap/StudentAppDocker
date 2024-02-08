import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent {
  @Output() addStudent = new EventEmitter<any>();

  student = {
    cedula: '',
    nombres: '',
    carrera: '',
  };

  carreras = ['Computacion', 'Electronica', 'Arquitectura', 'Disenio'];

  submitForm() {
    this.addStudent.emit({ ...this.student });
    this.student = { cedula: '', nombres: '', carrera: '' };
  }
}
