import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  matLocationOn,
  matCalendarMonth,
} from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [MatIconModule, NgIconComponent],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css',
  viewProviders: [provideIcons({ matLocationOn, matCalendarMonth })],
})
export class TripCardComponent {
  @Input() name = '';
  @Input() startDate = '';
  @Input() endDate = '';
  @Input() location = '';
}
