import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, ReactiveFormsModule],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Prenotazioni e contatti</h1>
        <p>Prenota un tavolo o contattaci per eventi privati e menu degustazione su misura.</p>
      </div>
    </section>

    <article class="demo-container content" *ngIf="info$ | async as info">
      <div class="contact-grid">
        <section class="info-block">
          <h2>Dove siamo</h2>
          <p>
            {{ info.indirizzo.via }}<br />
            {{ info.indirizzo.cap }} {{ info.indirizzo.citta }} ({{ info.indirizzo.provincia }})<br />
            {{ info.indirizzo.regione }}
          </p>

          <h2>Contatti</h2>
          <ul class="contact-list">
            <li>
              <strong>Telefono:</strong>
              <a [href]="'tel:' + info.contatti.telefono">{{ info.contatti.telefono }}</a>
            </li>
            <li>
              <strong>WhatsApp:</strong>
              <a [href]="whatsAppLink(info.contatti.whatsapp)" target="_blank" rel="noopener">{{
                info.contatti.whatsapp
              }}</a>
            </li>
            <li>
              <strong>Email:</strong>
              <a [href]="'mailto:' + info.contatti.email">{{ info.contatti.email }}</a>
            </li>
          </ul>

          <h2>Orari di apertura</h2>
          <ul class="hours-list">
            <li><span>Lunedì</span><span class="closed">{{ info.orari.lunedi }}</span></li>
            <li><span>Martedì</span><span>{{ info.orari.martedi }}</span></li>
            <li><span>Mercoledì</span><span>{{ info.orari.mercoledi }}</span></li>
            <li><span>Giovedì</span><span>{{ info.orari.giovedi }}</span></li>
            <li><span>Venerdì</span><span>{{ info.orari.venerdi }}</span></li>
            <li><span>Sabato</span><span>{{ info.orari.sabato }}</span></li>
            <li><span>Domenica</span><span>{{ info.orari.domenica }}</span></li>
          </ul>

          <h2>Servizi</h2>
          <ul class="services-list">
            <li *ngIf="info.servizi.tavoliEsteriVistamare">
              <span class="service-dot service-dot--yes" aria-label="disponibile"></span>
              Tavoli esterni vista mare ({{ info.servizi.postiAiTavoliEsterni }} posti)
            </li>
            <li>
              <span class="service-dot service-dot--yes" aria-label="disponibile"></span>
              Sala interna ({{ info.servizi.postiAlInterno }} posti)
            </li>
            <li *ngIf="info.servizi.salaPrivataEventi">
              <span class="service-dot service-dot--yes" aria-label="disponibile"></span>
              Sala privata eventi (fino a {{ info.servizi.capSalaPrivata }} posti)
            </li>
            <li>
              <span
                [class]="info.servizi.parcheggioConvenzionato ? 'service-dot service-dot--yes' : 'service-dot service-dot--no'"
                [attr.aria-label]="info.servizi.parcheggioConvenzionato ? 'disponibile' : 'non disponibile'"
              ></span>
              Parcheggio convenzionato
            </li>
            <li>
              <span class="service-dot service-dot--no" aria-label="non disponibile"></span>
              Consegna a domicilio (non effettuata)
            </li>
          </ul>
        </section>

        <section class="form-block">
          <h2>Prenota un tavolo</h2>
          <form [formGroup]="form" (ngSubmit)="onSubmit()" *ngIf="!submitted(); else thankyou">
            <div class="field">
              <label for="nome">Nome e cognome</label>
              <input id="nome" type="text" formControlName="nome" required />
            </div>
            <div class="field">
              <label for="email">Email</label>
              <input id="email" type="email" formControlName="email" required />
            </div>
            <div class="field">
              <label for="telefono">Telefono</label>
              <input id="telefono" type="tel" formControlName="telefono" required />
            </div>
            <div class="row">
              <div class="field">
                <label for="data">Data</label>
                <input id="data" type="date" formControlName="data" required />
              </div>
              <div class="field">
                <label for="ora">Orario</label>
                <select id="ora" formControlName="ora" required>
                  <option value="">Scegli</option>
                  <option value="12:30">12:30</option>
                  <option value="13:00">13:00</option>
                  <option value="13:30">13:30</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                </select>
              </div>
              <div class="field">
                <label for="ospiti">Ospiti</label>
                <input id="ospiti" type="number" formControlName="ospiti" min="1" max="30" required />
              </div>
            </div>
            <div class="field">
              <label for="occasione">Occasione speciale</label>
              <select id="occasione" formControlName="occasione">
                <option value="">Nessuna</option>
                <option value="compleanno">Compleanno</option>
                <option value="anniversario">Anniversario</option>
                <option value="business">Pranzo / cena di lavoro</option>
                <option value="proposta">Proposta di matrimonio</option>
                <option value="altro">Altro</option>
              </select>
            </div>
            <div class="field">
              <label for="note">Note (allergie, intolleranze, richieste)</label>
              <textarea id="note" formControlName="note" rows="3"></textarea>
            </div>
            <div class="field field--checkbox">
              <input id="privacy" type="checkbox" formControlName="privacy" />
              <label for="privacy">
                Accetto la privacy policy e il trattamento dei dati personali per la gestione della prenotazione.
              </label>
            </div>
            <button type="submit" class="btn btn-primary" [disabled]="form.invalid">Invia richiesta</button>
            <p class="form-disclaimer">
              Demo non funzionale: nessuna prenotazione è realmente inviata. Per prenotare chiama il
              +39 080 555 9876.
            </p>
          </form>
          <ng-template #thankyou>
            <div class="thankyou">
              <h3>Grazie {{ form.value.nome }}!</h3>
              <p>
                La tua richiesta di prenotazione per {{ form.value.ospiti }} persone il
                {{ form.value.data }} alle {{ form.value.ora }} è stata simulata correttamente.
              </p>
              <p>In un sito reale riceveresti un'email di conferma con i dettagli della prenotazione.</p>
              <button type="button" class="btn btn-secondary" (click)="reset()">Nuova richiesta</button>
            </div>
          </ng-template>
        </section>
      </div>

      <section class="faq-block" *ngIf="faq$ | async as faq">
        <h2>Domande frequenti</h2>
        <ul class="faq-list">
          <li *ngFor="let item of faq.faq" class="faq-item">
            <h3 class="faq-item__domanda">{{ item.domanda }}</h3>
            <p class="faq-item__risposta">{{ item.risposta }}</p>
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
      .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 3rem;
        margin-bottom: 4rem;
      }
      .info-block h2 {
        margin: 1.5rem 0 0.75rem;
        font-size: 1.2rem;
      }
      .info-block h2:first-child {
        margin-top: 0;
      }
      .info-block p {
        color: var(--color-fg-muted);
        line-height: 1.6;
      }
      .contact-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .contact-list li {
        margin-bottom: 0.5rem;
      }
      .contact-list a {
        color: var(--color-accent);
      }
      .hours-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .hours-list li {
        display: flex;
        justify-content: space-between;
        padding: 0.4rem 0;
        border-bottom: 1px dashed var(--color-border);
        font-size: 0.9rem;
      }
      .closed {
        color: var(--color-danger, #cf222e);
        font-weight: 600;
      }
      .services-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .services-list li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.4rem 0;
        font-size: 0.9rem;
        color: var(--color-fg-muted);
      }
      .service-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }
      .service-dot--yes {
        background: var(--color-success, #1a7f37);
      }
      .service-dot--no {
        background: var(--color-danger, #cf222e);
      }
      .form-block {
        background: var(--color-bg-subtle);
        padding: 2rem;
        border-radius: var(--radius-lg);
      }
      .form-block h2 {
        margin: 0 0 1.5rem;
      }
      .field {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
      }
      .field label {
        font-size: 0.85rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
      }
      .field input,
      .field select,
      .field textarea {
        padding: 0.5rem 0.75rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        font-family: inherit;
        font-size: 0.95rem;
        background: #ffffff;
      }
      .field input:focus,
      .field select:focus,
      .field textarea:focus {
        outline: 2px solid var(--color-accent);
        outline-offset: 1px;
        border-color: var(--color-accent);
      }
      .field--checkbox {
        flex-direction: row;
        align-items: flex-start;
        gap: 0.5rem;
      }
      .field--checkbox label {
        font-weight: 400;
        font-size: 0.85rem;
        color: var(--color-fg-muted);
      }
      .row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.75rem;
      }
      .btn {
        display: inline-block;
        padding: 0.7rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        border: none;
        cursor: pointer;
        font-size: 0.95rem;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
      }
      .btn-primary:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .btn-secondary {
        background: #ffffff;
        color: var(--color-fg-default);
        border: 1px solid var(--color-border);
      }
      .form-disclaimer {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        font-style: italic;
        margin-top: 0.5rem;
      }
      .thankyou {
        text-align: center;
      }
      .thankyou h3 {
        color: var(--color-success, #1a7f37);
      }
      .faq-block {
        border-top: 1px solid var(--color-border);
        padding-top: 3rem;
      }
      .faq-block h2 {
        margin: 0 0 2rem;
      }
      .faq-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
        gap: 1.5rem;
      }
      .faq-item {
        padding: 1.25rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: var(--color-bg-subtle);
      }
      .faq-item__domanda {
        margin: 0 0 0.5rem;
        font-size: 1rem;
        color: var(--color-fg-default);
      }
      .faq-item__risposta {
        margin: 0;
        font-size: 0.9rem;
        color: var(--color-fg-muted);
        line-height: 1.5;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContattiComponent {
  private readonly mockData = inject(MockDataService);
  private readonly fb = inject(FormBuilder);

  readonly info$ = this.mockData.info$;
  readonly faq$ = this.mockData.faq$;
  readonly submitted = signal(false);

  readonly form: FormGroup = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern(/^[+0-9 ]{6,}$/)]],
    data: ['', Validators.required],
    ora: ['', Validators.required],
    ospiti: [2, [Validators.required, Validators.min(1), Validators.max(30)]],
    occasione: [''],
    note: [''],
    privacy: [false, Validators.requiredTrue]
  });

  whatsAppLink(num: string): string {
    const clean = num.replace(/[^0-9]/g, '');
    return `https://wa.me/${clean}`;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted.set(true);
    }
  }

  reset(): void {
    this.form.reset({ ospiti: 2, occasione: '', privacy: false });
    this.submitted.set(false);
  }
}
