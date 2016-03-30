import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {SkillsComponent} from './skills.component';
import {SoftSkillsComponent} from './soft-skills.component';
import {ResumeDataService} from './resume-data.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Skills']">Skills</a>
      <a [routerLink]="['SoftSkills']">Soft Skills</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ResumeDataService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
   { path: '/skills', name: 'Skills', component: SkillsComponent, useAsDefault: true },
   { path: '/softSkills', name: 'SoftSkills', component: SoftSkillsComponent}
])
export class AppComponent {
  title: "Soham's Page";
}
