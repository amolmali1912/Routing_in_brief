import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected deparment that has id = 
    {{ departmentId }}</h3>
    
    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>

    <p>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
    </p>

    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: [
    `
      a {
        cursor: pointer;
        text-decoration: underline;
        padding: 3px;
      }
    `
  ]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  public departmentName;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // get Department Id
     // let id = Number(this.route.snapshot.paramMap.get('id'));
    //  this.departmentId = id;

    // get Department Name
    //  let name = this.route.snapshot.paramMap.get('deptname');
     // this.departmentName = name;
    console.log(this.route.snapshot.params); // to fetch Parameters from Route URL

    // paramMap observable
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;   // storing our current department id here
    })
  }

goPrevious() {
      let previousId = this.departmentId - 1;
      this.router.navigate(['/departments', previousId]);
}

goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
}

gotoDepartments() {
  let selectedId = this.departmentId ? this.departmentId : null;
 // this.router.navigate(['/departments', {id: selectedId}])

  this.router.navigate(['../', { id: selectedId }], {relativeTo: this.route})
}

showOverview() {
  this.router.navigate(['overview'], {relativeTo: this.route});
}

showContact() {
  this.router.navigate(['contact'], {relativeTo: this.route});
}
}
