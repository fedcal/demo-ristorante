import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { map } from 'rxjs';

import { MockDataService } from '../../data/mock-data.service';
import type { Piatto, Vino } from '../../data/types';

interface MenuView {
  categorie: { id: string; nome: string; piatti: Piatto[] }[];
  menuDegustazione: { id: string; nome: string; descrizione: string; prezzo: number; prezzoConVini: number; portate: number; durata: string; note: string }[];
  vini: Vino[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, NgFor, NgIf],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Il nostro menu</h1>
        <p>Antipasti · Primi · Secondi · Contorni · Dolci · Selezione vini pugliesi</p>
      </div>
    </section>

    <article class="demo-container" *ngIf="view$ | async as view">
      <section *ngFor="let cat of view.categorie" class="menu-category" [id]="cat.id">
        <h2>{{ cat.nome }}</h2>
        <ul class="piatti-list">
          <li *ngFor="let piatto of cat.piatti" class="piatto-item">
            <div class="piatto-item__head">
              <h3>{{ piatto.nome }}</h3>
              <span class="piatto-item__price">{{ piatto.prezzo | currency: 'EUR' }}</span>
            </div>
            <p class="piatto-item__desc">{{ piatto.descrizione }}</p>
            <div class="piatto-item__footer">
              <div class="piatto-item__badges">
                <span *ngIf="piatto.premium" class="badge badge--premium">Specialità</span>
              </div>
              <div class="piatto-item__allergeni" *ngIf="piatto.allergeni.length > 0">
                <span class="allergeni-label">Allergeni:</span>
                <span *ngFor="let a of piatto.allergeni" class="allergene">{{ a }}</span>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section class="menu-category" id="degustazione">
        <h2>Menu Degustazione</h2>
        <ul class="degu-list">
          <li *ngFor="let m of view.menuDegustazione" class="degu-item">
            <div class="degu-item__head">
              <h3>{{ m.nome }}</h3>
              <div class="degu-item__prezzi">
                <span class="degu-item__price">{{ m.prezzo | currency: 'EUR' }}/pers.</span>
                <span class="degu-item__price-vini">Con vini {{ m.prezzoConVini | currency: 'EUR' }}</span>
              </div>
            </div>
            <p class="degu-item__desc">{{ m.descrizione }}</p>
            <p class="degu-item__meta">{{ m.portate }} portate · {{ m.durata }} · {{ m.note }}</p>
          </li>
        </ul>
      </section>

      <section class="menu-category" id="vini">
        <h2>Carta dei Vini</h2>
        <p class="section-intro">Selezione a cura della sommelier AIS Giulia Ferrante. Carta completa su richiesta (80 etichette).</p>
        <ul class="vini-list">
          <li *ngFor="let vino of view.vini" class="vino-item">
            <div class="vino-item__head">
              <div class="vino-item__info">
                <h3>{{ vino.nome }}</h3>
                <p class="vino-item__produttore">{{ vino.produttore }} · {{ vino.regione }} · {{ vino.annata }}</p>
              </div>
              <div class="vino-item__prezzi">
                <span class="vino-item__price">{{ vino.prezzoBottiglia | currency: 'EUR' }}</span>
                <span class="vino-item__calice">/ {{ vino.prezzoCalice | currency: 'EUR' }} al calice</span>
              </div>
            </div>
            <div class="vino-item__footer">
              <span class="vino-item__tipo">{{ vino.tipologia }}</span>
              <span class="vino-item__abbinamento">{{ vino.abbinamento }}</span>
            </div>
          </li>
        </ul>
      </section>

      <p class="disclaimer">
        Prezzi espressi in Euro IVA inclusa. Coperto €2,50/persona. Per allergeni e intolleranze consultare lo staff
        prima di ordinare — ogni piatto è preparato artigianalmente.
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
      .menu-category {
        padding: 3rem 1rem 1.5rem;
      }
      .menu-category h2 {
        font-size: 1.5rem;
        margin: 0 0 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--color-accent);
        display: inline-block;
      }
      .section-intro {
        color: var(--color-fg-muted);
        font-size: 0.9rem;
        margin: -0.75rem 0 1.5rem;
        font-style: italic;
      }
      .piatti-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 1.25rem;
      }
      .piatto-item {
        padding: 1rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: #ffffff;
      }
      .piatto-item__head {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 1rem;
        margin-bottom: 0.5rem;
      }
      .piatto-item__head h3 {
        margin: 0;
        font-size: 1.05rem;
      }
      .piatto-item__price {
        color: var(--color-accent);
        font-weight: 700;
        flex-shrink: 0;
      }
      .piatto-item__desc {
        color: var(--color-fg-muted);
        font-size: 0.9rem;
        margin: 0 0 0.75rem;
        line-height: 1.5;
      }
      .piatto-item__footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .piatto-item__badges {
        display: flex;
        gap: 0.4rem;
        flex-wrap: wrap;
      }
      .badge {
        font-size: 0.7rem;
        padding: 0.15rem 0.5rem;
        border-radius: 9999px;
        font-weight: 600;
      }
      .badge--premium {
        background: #fff8c5;
        color: var(--color-warning);
      }
      .piatto-item__allergeni {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        flex-wrap: wrap;
      }
      .allergeni-label {
        font-size: 0.7rem;
        color: var(--color-fg-muted);
        font-weight: 600;
      }
      .allergene {
        font-size: 0.65rem;
        background: #fff3cd;
        color: #856404;
        padding: 0.1rem 0.4rem;
        border-radius: 9999px;
        text-transform: capitalize;
      }
      .degu-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 1.25rem;
      }
      .degu-item {
        padding: 1.25rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: var(--color-bg-subtle);
      }
      .degu-item__head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 0.5rem;
      }
      .degu-item__head h3 {
        margin: 0;
        font-size: 1.05rem;
      }
      .degu-item__prezzi {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        flex-shrink: 0;
      }
      .degu-item__price {
        color: var(--color-accent);
        font-weight: 700;
      }
      .degu-item__price-vini {
        font-size: 0.75rem;
        color: var(--color-fg-muted);
      }
      .degu-item__desc {
        color: var(--color-fg-muted);
        font-size: 0.9rem;
        margin: 0 0 0.5rem;
      }
      .degu-item__meta {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        font-style: italic;
        margin: 0;
      }
      .vini-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
        gap: 1rem;
      }
      .vino-item {
        padding: 1rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: #ffffff;
      }
      .vino-item__head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 0.5rem;
      }
      .vino-item__info h3 {
        margin: 0 0 0.2rem;
        font-size: 1rem;
      }
      .vino-item__produttore {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        margin: 0;
      }
      .vino-item__prezzi {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        flex-shrink: 0;
      }
      .vino-item__price {
        color: var(--color-accent);
        font-weight: 700;
        font-size: 1.05rem;
      }
      .vino-item__calice {
        font-size: 0.75rem;
        color: var(--color-fg-muted);
      }
      .vino-item__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .vino-item__tipo {
        font-size: 0.75rem;
        background: #e8f4fd;
        color: #0550ae;
        padding: 0.15rem 0.5rem;
        border-radius: 9999px;
        font-weight: 600;
      }
      .vino-item__abbinamento {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        font-style: italic;
      }
      .disclaimer {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        font-style: italic;
        text-align: center;
        margin: 3rem 1rem;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  private readonly mockData = inject(MockDataService);

  readonly view$ = this.mockData.menu$.pipe(
    map((menu): MenuView => ({
      categorie: menu.categorie
        .sort((a, b) => a.ordine - b.ordine)
        .map((cat) => ({
          id: cat.id,
          nome: cat.nome,
          piatti: menu.piatti.filter((p) => p.categoria === cat.id)
        })),
      menuDegustazione: menu.menuDegustazione,
      vini: menu.vini
    }))
  );
}
