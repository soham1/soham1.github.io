import {Component, OnInit} from 'angular2/core';
import {ResumeDataService, ComputerScienceSkills} from './resume-data.service';

@Component({
  selector: 'skills',
  template: `
    <table>
      <tr *ngFor="#skill of skills">
        <td>{{skill.category}}</td>
      </tr>
    </table>
  `
})

export class SkillsComponent implements OnInit {
  skills: ComputerScienceSkills[];
  errorMessage: string;
  constructor(private _ResumeDataService: ResumeDataService) { }

  ngOnInit() { this.getSkills(); }

  getSkills() {
    this._ResumeDataService.getSkills()
      .subscribe(
          skills => this.skills = skills,
          error =>  this.errorMessage = <any>error
      );
  }
}
