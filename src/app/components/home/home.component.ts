import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { IntroComponent } from '../intro/intro.component';
import { SkillsComponent } from '../skills/skills.component';
import { WorksComponent } from '../works/works.component';
import { WorkedComponent } from '../worked/worked.component';
import { CollabComponent } from '../collab/collab.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { CtaComponent } from '../cta/cta.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, IntroComponent, SkillsComponent, WorksComponent, WorkedComponent, CollabComponent, TestimonialsComponent, CtaComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
