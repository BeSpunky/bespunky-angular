import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  templateUrl: './angular-google-maps.html',
  styleUrl: './angular-google-maps.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BespunkyAngularGoogleMaps {}
