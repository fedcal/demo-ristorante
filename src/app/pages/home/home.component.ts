import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, NgFor, NgIf, RouterLink],
  template: `
    <section class="hero">
      <div class="demo-container">
        <h1>Pesce fresco dal mare alla tavola</h1>
        <p class="hero-tagline">Dal Mar Adriatico alla vostra tavola ogni giorno, dal 1995. Sul lungomare di Bari.</p>
        <div class="hero-actions">
          <a routerLink="/menu" class="btn btn-primary">Scopri il menu</a>
          <a routerLink="/contatti" class="btn btn-secondary">Prenota un tavolo</a>
        </div>
      </div>
    </section>

    <section class="features demo-container">
      <h2>Perché scegliere la Trattoria del Mare</h2>
      <ul class="feature-grid">
        <li>
          <span class="feature-icon" aria-hidden="true">🎣</span>
          <h3>Pesce del giorno</h3>
          <p>Il mercato ittico di Bari ogni mattina alle 06:30. Solo pesce fresco, mai surgelato.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">👨‍🍳</span>
          <h3>Chef Carlo Marini</h3>
          <p>31 anni di cucina di mare, formato in ristoranti stellati, con radici nel territorio pugliese.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">🍷</span>
          <h3>Vini selezionati</h3>
          <p>Carta da 80 etichette curata dalla sommelier AIS Giulia Ferrante. Focus su Puglia e Sud Italia.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">🌊</span>
          <h3>Vista sul mare</h3>
          <p>30 posti ai tavoli esterni sul lungomare con vista diretta sull'Adriatico.</p>
        </li>
      </ul>
    </section>

    <section class="featured demo-container" *ngIf="specialita$ | async as specialita">
      <div class="section-header">
        <h2>Le specialità della casa</h2>
        <a routerLink="/menu" class="link-more">Tutto il menu →</a>
      </div>
      <ul class="piatti-grid">
        <li *ngFor="let piatto of specialita" class="piatto-card">
          <div class="piatto-card__title">
            <h3>{{ piatto.nome }}</h3>
            <span class="piatto-card__price">{{ piatto.prezzo | currency: 'EUR' }}</span>
          </div>
          <p class="piatto-card__desc">{{ piatto.descrizione }}</p>
          <div class="piatto-card__badges">
            <span *ngIf="piatto.premium" class="badge badge--premium">Specialità</span>
          </div>
        </li>
      </ul>
    </section>

    <section class="menu-fissi demo-container" *ngIf="menuDegustazione$ | async as menu">
      <div class="section-header">
        <h2>Menu degustazione</h2>
        <a routerLink="/menu" class="link-more">Dettagli →</a>
      </div>
      <ul class="degu-grid">
        <li *ngFor="let m of menu" class="degu-card">
          <h3>{{ m.nome }}</h3>
          <p class="degu-card__desc">{{ m.descrizione }}</p>
          <div class="degu-card__footer">
            <span class="degu-card__price">{{ m.prezzo | currency: 'EUR' }}/persona</span>
            <span class="degu-card__portate">{{ m.portate }} portate · {{ m.durata }}</span>
          </div>
        </li>
      </ul>
    </section>

    <section class="cta-band">
      <div class="demo-container">
        <h2>Prenota il tuo tavolo vista mare</h2>
        <p>Aperti dal martedì alla domenica a pranzo e cena. Tavoli esterni disponibili in estate.</p>
        <div class="hero-actions">
          <a routerLink="/contatti" class="btn btn-primary">Prenota ora</a>
          <a href="tel:+390805559876" class="btn btn-secondary">Chiama +39 080 555 9876</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 5rem 1rem;
        text-align: center;
        background: linear-gradient(180deg, #f0f8ff 0%, #ffffff 100%);
        border-bottom: 1px solid var(--color-border);
      }
      .hero h1 {
        font-size: clamp(2rem, 5vw, 3.5rem);
        margin: 0 0 1rem;
        color: var(--color-fg-default);
      }
      .hero-tagline {
        font-size: 1.15rem;
        color: var(--color-fg-muted);
        margin: 0 0 2rem;
      }
      .hero-actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      .btn {
        display: inline-block;
        padding: 0.7rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        transition: all 0.15s ease;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
      }
      .btn-primary:hover {
        background: #0850b0;
      }
      .btn-secondary {
        background: #ffffff;
        color: var(--color-fg-default);
        border: 1px solid var(--color-border);
      }
      .btn-secondary:hover {
        background: var(--color-bg-subtle);
      }
      .features {
        padding: 4rem 1rem;
      }
      .features h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .feature-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .feature-grid li {
        text-align: center;
      }
      .feature-icon {
        font-size: 2.5rem;
        display: block;
        margin-bottom: 0.5rem;
      }
      .feature-grid h3 {
        margin: 0 0 0.5rem;
        font-size: 1.1rem;
      }
      .feature-grid p {
        margin: 0;
        color: var(--color-fg-muted);
        font-size: 0.95rem;
      }
      .featured {
        padding: 4rem 1rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-lg);
        margin: 0 1rem 4rem;
      }
      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .section-header h2 {
        margin: 0;
      }
      .link-more {
        color: var(--color-accent);
        text-decoration: none;
        font-weight: 600;
      }
      .piatti-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
      }
      .piatto-card {
        background: #ffffff;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        padding: 1.25rem;
      }
      .piatto-card__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
        gap: 0.5rem;
      }
      .piatto-card__title h3 {
        margin: 0;
        font-size: 1.05rem;
      }
      .piatto-card__price {
        color: var(--color-accent);
        font-weight: 700;
        flex-shrink: 0;
      }
      .piatto-card__desc {
        color: var(--color-fg-muted);
        font-size: 0.9rem;
        margin: 0 0 0.5rem;
      }
      .piatto-card__badges {
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
      .menu-fissi {
        padding: 4rem 1rem;
      }
      .degu-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
      }
      .degu-card {
        background: var(--color-bg-subtle);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        padding: 1.5rem;
      }
      .degu-card h3 {
        margin: 0 0 0.5rem;
        font-size: 1.1rem;
      }
      .degu-card__desc {
        color: var(--color-fg-muted);
        font-size: 0.9rem;
        margin: 0 0 1rem;
      }
      .degu-card__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .degu-card__price {
        color: var(--color-accent);
        font-weight: 700;
        font-size: 1.05rem;
      }
      .degu-card__portate {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
      }
      .cta-band {
        padding: 4rem 1rem;
        background: var(--color-fg-default);
        color: #ffffff;
        text-align: center;
      }
      .cta-band h2 {
        margin: 0 0 0.75rem;
        color: #ffffff;
      }
      .cta-band p {
        color: rgba(255, 255, 255, 0.85);
        margin: 0 0 2rem;
      }
      .cta-band .btn-secondary {
        background: transparent;
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.3);
      }
      .cta-band .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly mockData = inject(MockDataService);

  readonly specialita$ = this.mockData.menu$.pipe(
    map((menu) => menu.piatti.filter((p) => p.premium === true).slice(0, 3))
  );

  readonly menuDegustazione$ = this.mockData.menu$.pipe(
    map((menu) => menu.menuDegustazione.slice(0, 3))
  );
}
