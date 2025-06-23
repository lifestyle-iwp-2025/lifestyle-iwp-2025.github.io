import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-poster-button',
  templateUrl: './poster-button.component.html',
  styleUrl: './poster-button.component.css'
})
export class PosterButtonComponent implements OnChanges {
  @Input() link!: string;
  @Input() backgroundColor?: string;

  bgColor = '#b19cd9';
  textColor = '#000';

  ngOnChanges(): void {
    this.bgColor = this.backgroundColor || '#b19cd9';
    this.textColor = this.getContrastColor(this.bgColor);
  }

  private getContrastColor(color: string): string {
    const hex = color.replace('#', '');
    let r: number, g: number, b: number;
    if (hex.length === 3) {
      r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
      g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
      b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
    } else {
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    }
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 140 ? '#000' : '#fff';
  }
}
