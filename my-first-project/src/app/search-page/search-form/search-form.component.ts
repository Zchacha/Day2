import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  departmentSelected;
  genderSelected;
  firstName: string;
  lastName: string;
  @Output()
  addToList = new EventEmitter();
  cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];
departmentList = [
  {
    departmentCode: '001',
    departmentName: 'Sale'
  },
  {
    departmentCode: '002',
    departmentName: 'IT'
  },
  {
    departmentCode: '003',
    departmentName: 'HR'
  }
];
genderList = [{
  label: 'Male',
  value: 'M'
},
{
  label: 'Female',
  value: 'F'
}];

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    console.log('ngOninit search form');
    this.empService.hello();
  }

  addClick(event) {
    console.log('value' , {
      departmentCode: this.departmentSelected.departmentCode,
      gender: this.genderSelected,
      firstName : this.firstName,
      lastName : this.lastName
    });


    this.addToList.emit({
      departmentCode: this.departmentSelected.departmentCode,
      gender: this.genderSelected,
      firstName : this.firstName,
      lastName : this.lastName
    });
  }
  searchClick(event) {
    this.empService.getEmployee(null).subscribe(response => {
      console.log('response from api ' , response);
    });
  }
}
