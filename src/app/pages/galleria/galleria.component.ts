import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface ImagePlaceholder {
  id: number;
  caption: string;
  emoji: string;
  category: string;
}

@Component({
  selector: 'app-galleria',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Galleria</h1>
        <p>Il nostro mare, i nostri piatti, la nostra sala. Placeholder demo — foto reali con servizio fotografico.</p>
      </div>
    </section>

    <article class="demo-container content">
      <ul class="gallery-grid">
        <li *ngFor="let img of images" class="gallery-item" [attr.data-cat]="img.category">
          <div class="gallery-item__placeholder" [attr.aria-label]="img.caption">
            <span class="gallery-item__emoji" aria-hidden="true">{{ img.emoji }}</span>
          </div>
          <p class="gallery-item__caption">{{ img.caption }}</p>
        </li>
      </ul>

      <p class="disclaimer">
        Per il sito reale di un ristorante cliente, le immagini placeholder vengono sostituite con un servizio
        fotografico professionale del locale, dei piatti e dello staff. Costo medio fotografo food Italia 2026:
        €400-800 per servizio completo con ritocco post-produzione.
      </p>
    </article>
  `,
  styles: [
    `
      .page-header {
        padding: 4rem 1rem 3rem;
        background: var(--color-bg-subtle);
        text-align: center;
        border-bottom: 1px solid var(--color-border);
      }
      .page-header h1 {
        margin: 0 0 0.5rem;
      }
      .page-header p {
        color: var(--color-fg-muted);
        margin: 0;
      }
      .content {
        padding: 3rem 1rem;
      }
      .gallery-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
      }
      .gallery-item {
        text-align: center;
      }
      .gallery-item__placeholder {
        aspect-ratio: 4 / 3;
        background: linear-gradient(135deg, #f0f8ff, #d0eaff);
        border-radius: var(--radius-md);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        margin-bottom: 0.5rem;
      }
      .gallery-item__caption {
        font-size: 0.9rem;
        color: var(--color-fg-muted);
        margin: 0;
      }
      .disclaimer {
        font-size: 0.85rem;
        color: var(--color-fg-muted);
        font-style: italic;
        text-align: center;
        margin: 3rem auto 0;
        max-width: 720px;
        padding: 1rem;
        border: 1px dashed var(--color-border);
        border-radius: var(--radius-md);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleriaComponent {
  readonly images: ImagePlaceholder[] = [
    { id: 1, caption: 'Crudo di gambero rosso di Gallipoli', emoji: '🦐', category: 'piatti' },
    { id: 2, caption: 'Polpo alla brace su crema di patate', emoji: '🐙', category: 'piatti' },
    { id: 3, caption: 'Orecchiette ai frutti di mare', emoji: '🍝', category: 'piatti' },
    { id: 4, caption: 'Linguine all\'astice blu', emoji: '🦞', category: 'piatti' },
    { id: 5, caption: 'Orata al sale grossa intera', emoji: '🐟', category: 'piatti' },
    { id: 6, caption: 'Grigliata mista dell\'Adriatico', emoji: '🔥', category: 'piatti' },
    { id: 7, caption: 'Tavoli vista mare al tramonto', emoji: '🌊', category: 'locale' },
    { id: 8, caption: 'Sala interna della trattoria', emoji: '🪑', category: 'locale' },
    { id: 9, caption: 'Il lungomare di Bari', emoji: '🌅', category: 'locale' },
    { id: 10, caption: 'Selezione vini bianchi pugliesi', emoji: '🍷', category: 'vini' },
    { id: 11, caption: 'Tiramisù del mare al limoncello', emoji: '🍰', category: 'piatti' },
    { id: 12, caption: 'Chef Carlo Marini in cucina', emoji: '👨‍🍳', category: 'team' }
  ];
}
