import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  /**
   * Background color for the footer. Can be provided via
   * `[footerColor]="'color'"` when using the component.
   */
  @Input() footerColor = '#bfbfbf';

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
