import { Component } from '@angular/core';
import { Instagram, LucideAngularModule, MessageCircle } from 'lucide-angular';

@Component({
  selector: 'app-hbd-card',
  imports: [LucideAngularModule],
  templateUrl: './hbd-card.html',
  styleUrl: './hbd-card.css',
})
export class HbdCard {
  readonly icons = { Instagram, MessageCircle }
  birthdayBoy = "Tafadzwa Sibanda"
}
