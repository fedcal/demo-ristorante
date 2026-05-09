import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-chi-siamo',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>La nostra storia</h1>
        <p>Una famiglia, un lungomare, trent'anni di pesce fresco. Dal 1995 sul lungomare di Bari.</p>
      </div>
    </section>

    <article class="demo-container content">
      <section class="story">
        <h2>Trattoria del Mare, dal 1995</h2>
        <p>
          Carlo Marini apre la Trattoria del Mare nel 1995 dopo anni di formazione nei ristoranti stellati di Genova e
          Venezia. Tornato in Puglia, sceglie il lungomare di Bari come casa per il suo progetto: una trattoria di mare
          che onorasse la pesca locale con tecnica e rispetto.
        </p>
        <p>
          Dal primo giorno, il rito è immutato: ogni mattina alle 06:30 Carlo o Davide sono al mercato ittico di Bari
          per scegliere personalmente il pescato del giorno. Nessun surgelato, nessun intermediario. La qualità parte
          da lì.
        </p>
        <p>
          Oggi la squadra è cresciuta: Davide, figlio di Carlo, ha portato in cucina le tecniche apprese all'ALMA di
          Colorno. Giulia gestisce una carta vini da 80 etichette con focus sul Sud Italia. Roberto coordina una sala
          che ha accolto oltre 200.000 ospiti in trent'anni. Tania produce ogni mattina tutta la pasticceria del
          ristorante.
        </p>
      </section>

      <section class="values">
        <h2>I nostri valori</h2>
        <ul class="values-grid">
          <li>
            <h3>Filiera corta</h3>
            <p>Pesce dal mercato ittico barese ogni mattina. Partnership diretta con pescatori locali dal 2001.</p>
          </li>
          <li>
            <h3>Territorio</h3>
            <p>Prodotti DOP e IGP pugliesi: olio EVO, pane di Altamura, verdure locali, vini del Sud.</p>
          </li>
          <li>
            <h3>Trasparenza</h3>
            <p>Menu stagionale che cambia in base al pescato. Sempre indicato l'origine e il metodo di preparazione.</p>
          </li>
          <li>
            <h3>Artigianalità</h3>
            <p>Pasta fresca fatta a mano, pasticceria in-house ogni mattina, abbattimento e conservazione propri.</p>
          </li>
        </ul>
      </section>

      <section class="certifications">
        <h2>Certificazioni e riconoscimenti</h2>
        <ul class="cert-grid">
          <li class="cert-card">
            <span class="cert-icon" aria-hidden="true">🏆</span>
            <h3>Miglior Sommelier Puglia</h3>
            <p>Giulia Ferrante, AIS Puglia 2023</p>
          </li>
          <li class="cert-card">
            <span class="cert-icon" aria-hidden="true">🐟</span>
            <h3>Filiera Corta Certificata</h3>
            <p>Mercato ittico di Bari, fornitore ufficiale dal 2003</p>
          </li>
          <li class="cert-card">
            <span class="cert-icon" aria-hidden="true">🌿</span>
            <h3>HACCP e tracciabilità</h3>
            "Piano di autocontrollo alimentare" aggiornato annualmente, abbattimento in-house certificato
          </li>
          <li class="cert-card">
            <span class="cert-icon" aria-hidden="true">♿</span>
            <h3>Accessibilità</h3>
            <p>Struttura pienamente accessibile a persone con disabilità motoria, percorso guidato e menu Braille su richiesta</p>
          </li>
        </ul>
      </section>

      <section class="team" *ngIf="team$ | async as team">
        <h2>Il team</h2>
        <ul class="team-grid">
          <li *ngFor="let m of team.team" class="team-card">
            <div class="team-card__avatar" aria-hidden="true">{{ m.nome.charAt(0) }}</div>
            <h3>{{ m.nome }}</h3>
            <p class="team-card__role">{{ m.ruolo }}</p>
            <p class="team-card__bio">{{ m.bio }}</p>
            <p class="team-card__exp">{{ m.anniEsperienza }} anni di esperienza</p>
            <ul class="team-card__skills">
              <li *ngFor="let s of m.specialita">{{ s }}</li>
            </ul>
          </li>
        </ul>
      </section>
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
      .story {
        max-width: 720px;
        margin: 0 auto 4rem;
      }
      .story h2 {
        margin-bottom: 1rem;
      }
      .story p {
        line-height: 1.7;
        margin-bottom: 1rem;
        color: var(--color-fg-muted);
      }
      .values {
        margin-bottom: 4rem;
      }
      .values h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .values-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .values-grid li {
        padding: 1.5rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-md);
      }
      .values-grid h3 {
        margin: 0 0 0.5rem;
        color: var(--color-accent);
      }
      .values-grid p {
        margin: 0;
        color: var(--color-fg-muted);
        font-size: 0.95rem;
      }
      .certifications {
        margin-bottom: 4rem;
      }
      .certifications h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .cert-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
      }
      .cert-card {
        padding: 1.25rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: #ffffff;
        text-align: center;
      }
      .cert-icon {
        font-size: 2rem;
        display: block;
        margin-bottom: 0.5rem;
      }
      .cert-card h3 {
        margin: 0 0 0.25rem;
        font-size: 1rem;
      }
      .cert-card p {
        margin: 0;
        font-size: 0.85rem;
        color: var(--color-fg-muted);
      }
      .team h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .team-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1.5rem;
      }
      .team-card {
        padding: 1.5rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        text-align: center;
      }
      .team-card__avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: var(--color-accent);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: 700;
        margin: 0 auto 1rem;
      }
      .team-card h3 {
        margin: 0 0 0.25rem;
      }
      .team-card__role {
        margin: 0 0 0.75rem;
        color: var(--color-accent);
        font-weight: 600;
        font-size: 0.9rem;
      }
      .team-card__bio {
        font-size: 0.9rem;
        color: var(--color-fg-muted);
        margin-bottom: 0.5rem;
        text-align: left;
        line-height: 1.5;
      }
      .team-card__exp {
        font-size: 0.8rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
      }
      .team-card__skills {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 0.4rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      .team-card__skills li {
        font-size: 0.7rem;
        background: var(--color-bg-subtle);
        padding: 0.25rem 0.5rem;
        border-radius: 9999px;
        color: var(--color-fg-muted);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChiSiamoComponent {
  private readonly mockData = inject(MockDataService);

  readonly team$ = this.mockData.team$;
}
