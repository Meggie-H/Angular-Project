import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  matLocationOn,
  matCalendarMonth,
} from '@ng-icons/material-icons/baseline';
import { TripInterface } from '../../../models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [MatIconModule, NgIconComponent, DatePipe],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css',
  viewProviders: [provideIcons({ matLocationOn, matCalendarMonth })],
})
export class TripCardComponent {
  @Input() trip: TripInterface | undefined;

}
