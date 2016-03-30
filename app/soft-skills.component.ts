import {Component, OnInit} from 'angular2/core';
import {ResumeDataService, SoftSkills} from './resume-data.service';

@Component({
  selector: 'soft-skills',
  template: `
    <ul>
      <li *ngFor="#softSkill of softSkills">
        {{softSkill.description}}
      </li>
    </ul>
  `
})

export class SoftSkillsComponent implements OnInit {
  softSkills: SoftSkills[];
  errorMessage: string;
  constructor(private _ResumeDataService: ResumeDataService) { }

  ngOnInit() { this.getSoftSkills(); }

  getSoftSkills() {
    this._ResumeDataService.getSoftSkills()
      .subscribe(
          softSkills => this.softSkills = softSkills,
          error =>  this.errorMessage = <any>error
      );
  }
}
