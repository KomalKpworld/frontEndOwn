import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { CoreService } from '../core/core.service';

interface Education {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})


export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup;
  Educations: Education[] = [
    { value: '1 to 10', viewValue: 'SSC' },
    { value: 'years', viewValue: 'Diploma' },
    { value: 'year', viewValue: 'graduation' },
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _coreService: CoreService,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      joiningdate: '',

      gender: '',
      education: ''
    })

  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  onformSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService.editEmployee(this.data.id, this.empForm.value).subscribe({
          next: (val: any) => {
           
        this._coreService.openSnackBar('employee edit successfully', 'ok')
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        })
      }

     else {
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('employee add successfully', 'ok')
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }

  }
  }
}