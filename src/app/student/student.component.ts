import { Component } from '@angular/core';

@Component({
    selector: 'student',
    templateUrl: 'student.component.html'
})
export class studentcomponent{
    stu: any[]=[
        
        {id:67, firstname:'sanjeevi reddy',fee:567677, dob:'6/4/1936',address:'chittoor'},
        {id:68, firstname:'subramanyam reddy',fee:90879, dob:'4/6/1964',address:'chittoor'},
        {id:69, firstname:'venkatesh',fee:9867, dob:'4/14/1936',address:'tirupathi'},
        {id:70, firstname:'manemma',fee:3457, dob:'6/7/1936',address:'chennai'},
        {id:71, firstname:'eshwary',fee:7860, dob:'6/6/1936',address:'banglore'}

    ];
}