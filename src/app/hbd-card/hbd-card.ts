import { Component } from '@angular/core';
import { Instagram, LucideAngularModule, MessageCircle } from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hbd-card',
  imports: [LucideAngularModule, FormsModule],
  templateUrl: './hbd-card.html',
  styleUrl: './hbd-card.css',
})
export class HbdCard {
  readonly icons = { Instagram, MessageCircle }
  birthdayBoy = "Tafadzwa Sibanda"
  message = ''
}
