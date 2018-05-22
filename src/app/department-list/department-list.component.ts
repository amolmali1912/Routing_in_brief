import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="deptList" style="list-style-type: none">
          <li [class.selected]="isSelected(department)" (click)="onSelect(department)" *ngFor = "let department of departments">
          <span class="badge">{{department.id}}</span> {{department.name}}</li>
     </ul>
  `,
  styles: [`
  .badge {
      padding: 4px;
      background-color: #435f6b;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      color: #fff;
}
.deptList li {
      margin-bottom: 10px;
      background-color: #f7f7f7;
      padding: 4px 2px;
      border-radius: 4px;
      width: 12%;
      cursor: pointer;
      color: #607D8B;
}

.deptList li:hover {
    background-color: #e8e8e8;
    padding-left: 3px;
}

.deptList li.selected {
  background-color: #d4d4d4;
}
  `
  ]
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "JavaScript"},
    {"id": 4, "name": "Bootstrap"},
    {"id": 5, "name": "CSS"},
  ]

  constructor(private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
      // paramMap observable
      this.route.paramMap.subscribe((params: ParamMap) => {
        let id = parseInt(params.get('id'));
        this.selectedId = id;   // storing our current department id here

      })
  }

  onSelect(department) {
  // this.router.navigate(['/departments', department.id]);

  this.router.navigate([department.id], {relativeTo: this.route})
  }

  isSelected(department) {
    return department.id === this.selectedId
  }

}
