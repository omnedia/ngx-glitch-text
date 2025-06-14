# ngx-glitch-text

<a href="https://ngxui.com" target="_blank" style="display: flex;gap: .5rem;align-items: center;cursor: pointer; padding: 0 0 0 0; height: fit-content;">
  <img src="https://ngxui.com/assets/img/ngxui-logo.png" style="width: 64px;height: 64px;">
</a>

This library is part of the NGXUI ecosystem.
View all available components at [https://ngxui.com](https://ngxui.com)

`@omnedia/ngx-glitch-text` is an Angular library that provides a fast, fully CSS-based glitch text effect for headlines, banners, and bold UI statements. All styles are customizable and the component is SSR-safe, using signals and standalone API.

## Features

* CSS-only glitch effect: zero dependencies, fast and efficient.
* Customizable shadow colors, animation speed, background color.
* All font styling (size, family, weight, color) is inherited from the parent/container.
* Fully SSR safe, Angular v20 ready, signal/standalone.
* Responsive and works in any layout.

## Installation

```
npm install @omnedia/ngx-glitch-text
```

## Usage

Import the `NgxGlitchTextComponent` in your Angular module or component:

```typescript
import { NgxGlitchTextComponent } from '@omnedia/ngx-glitch-text';

@Component({
  ...
  imports: [
    ...
    NgxGlitchTextComponent,
  ],
  ...
})
```

Use the component in your template:

```html
<om-glitch-text
  [text]="'GLITCH'"
  [speed]="1"
  [enableShadows]="true"
  [firstShadow]="'-5px 0 red'"
  [secondShadow]="'5px 0 cyan'"
  [backgroundColor]="'white'"
  styleClass="big-glitch"
></om-glitch-text>
```

## API

```html
<om-glitch-text
  [text]="text"
  [speed]="speed"
  [enableShadows]="enableShadows"
  [firstShadow]="firstShadow"
  [secondShadow]="secondShadow"
  [backgroundColor]="backgroundColor"
  styleClass="your-custom-class"
></om-glitch-text>
```

* `text` (required): The string to display with the glitch effect.
* `speed` (optional): Animation speed multiplier (default: `1`).
* `enableShadows` (optional): Enables colored glitch shadows (default: `true`).
* `firstShadow` (optional): Shadow for one glitch line (`-5px 0 red` by default).
* `secondShadow` (optional): Shadow for other glitch line (`5px 0 cyan` by default).
* `backgroundColor` (optional): Background behind the glitch (default: `'white'`).
* `styleClass` (optional): Extra class for custom font styling, size, etc.

## Styling

All font, size, and color are **fully inherited** from the parent or via `styleClass`. Example:

```css
.big-glitch {
  font-size: 5rem;
  font-family: 'Fira Mono', monospace;
  font-weight: 900;
  color: #000;
}
```

## Notes

* The glitch effect is pure CSS for maximum performance.
* Change the `speed` input to slow down/speed up the animation.
* Use `firstShadow`/`secondShadow` to fully customize the glitch colors.
* Use `[backgroundColor]` to match your UI background.
* No JS or canvas animation: works everywhere, including SSR.

## Contributing

Contributions are welcome. Please submit a pull request or open an issue to discuss your ideas.

## License

MIT
