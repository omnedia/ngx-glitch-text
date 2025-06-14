import {ChangeDetectionStrategy, Component, computed, ElementRef, Input, signal, ViewChild,} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'om-glitch-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngx-glitch-text.component.html',
  styleUrl: './ngx-glitch-text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxGlitchTextComponent {
  @ViewChild('OmGlitchText') glitchTextRef!: ElementRef<HTMLElement>;

  @Input('styleClass') styleClass?: string;

  @Input()
  set text(text: string) {
    this.textValue.set(text);
  }

  @Input()
  set speed(speed: number) {
    this.speedValue.set(speed);
  }

  @Input()
  set enableShadows(enableShadows: boolean) {
    this.enableShadowsValue.set(enableShadows);
  }

  @Input()
  set firstShadow(firstShadow: string) {
    this.firstShadowValue.set(firstShadow);
  }

  @Input()
  set secondShadow(secondShadow: string) {
    this.secondShadowValue.set(secondShadow);
  }

  @Input()
  set backgroundColor(backgroundColor: string) {
    this.backgroundColorValue.set(backgroundColor);
  }

  textValue = signal('');

  speedValue = signal(1);
  enableShadowsValue = signal(true);
  firstShadowValue = signal('-5px 0 red');
  secondShadowValue = signal('5px 0 cyan');
  backgroundColorValue = signal('white');

  style = computed<Record<string, string>>(() => ({
    '--om-after-duration': `${this.speedValue() * 3}s`,
    '--om-before-duration': `${this.speedValue() * 2}s`,
    '--om-after-shadow': this.enableShadowsValue() ? this.firstShadowValue() : 'none',
    '--om-before-shadow': this.enableShadowsValue() ? this.secondShadowValue() : 'none',
    '--om-background-color': this.backgroundColorValue(),
  }));
}
