# Customization

## Cambiare i dati mock

Edita i file in `src/assets/mock/`. Vedi [Mock Data](/mock-data).

## Cambiare i colori

I design tokens sono in `src/styles.css`:

```css
:root {
  --color-accent: #0969da;        /* Cambia qui per il colore primario */
  --color-bg-default: #ffffff;
  --color-fg-default: #1f2328;
  /* ... */
}
```

## Cambiare il logo

Sostituisci `public/favicon.ico` e aggiungi il logo SVG in `public/logo.svg`.

## Aggiungere route

1. Crea il componente in `src/app/pages/{nome}/`
2. Aggiungi la route in `src/app/app.routes.ts`:

```typescript
{
  path: 'servizi',
  loadComponent: () => import('./pages/servizi/servizi.component').then((m) => m.ServiziComponent),
  title: 'Servizi — Ristorante'
}
```

## Cambiare i metadati SEO

Edita `src/index.html` per:
- `<title>` globale
- `<meta name="description">`
- Open Graph

Per metadati per-route usa `Title` e `Meta` di `@angular/platform-browser`.

## Disabilitare il prerender

In `angular.json`:

```json
"prerender": false
```

In questo caso il sito gira solo in modalità SSR runtime (più lento al cold start, più dinamico).

## White-label per cliente

1. Fork del repo o copia in nuova cartella
2. Sostituisci `ristorante` con nome cliente (`acme-ristorante`)
3. Sostituisci footer rimuovendo riferimento a Federico (modifica `footer.component.ts`)
4. Personalizza `vercel.json` con domain custom cliente
5. Deploy su Vercel cliente con loro account

---

## Possibili Sviluppi Customizzabili per Ristorante

### 1. Integrazione TheFork Per Prenotazioni
**Scope**: ~18h | **Tier**: Avanzato | **Valore**: Captare 30-40% prenotazioni OTA

Sync automatico calendar: TheFork ingoia prenotazione → tuo engine visualizza tavoli occupati. Riduce doppia-prenotazione.

### 2. Menu Degustazione Personalizzato su Allergie AI
**Scope**: ~22h | **Tier**: Avanzato | **Valore**: Conversion allergic clients +45%

Client dichiara allergie → AI sommelier propone 5 menu alternativi con vini matching. Zero contatto staff pre-ordine.

### 3. Foto Piatto Generative + AI Description
**Scope**: ~20h | **Tier**: Avanzato | **Valore**: Visual appeal +30%, SEO desc auto

Carica foto piatto grezzo → API generativa (DALL-E/Stable) ritocca lighting. Auto-genera description SEO from ingredienti lista.

### 4. Video Sommelier Localizzato per Vino
**Scope**: ~25h | **Tier**: Premium | **Valore**: Upsell vini +40%

Per ogni vino top (Barolo, Brunello): 90sec video sommelier consiglia abbinamenti e storia cantina. YouTube embed.

### 5. Loyalty Points + Birthday Promo
**Scope**: ~19h | **Tier**: Avanzato | **Valore**: Repeat visit +25%

Cliente accumula 10 punti/prenotazione. Birthday month: email "Cena gratis il tuo giorno". SMS reminder 1 settimana prima.

### 6. Table Layout Planner (Matrimoni)
**Scope**: ~30h | **Tier**: Premium | **Valore**: Wedding catering +€500-1000/evento

Client carica guest list → drag-drop tavoli su floor plan → auto-assegna seating + menu + wine pairing. PDF booking.

### 7. Menu Video Reel TikTok Auto-Generate
**Scope**: ~18h | **Tier**: Premium | **Valore**: Organic reach +200%, viral potential

Ogni piatto new → auto-genera 15sec TikTok (foto + ingredienti + chef narration). Batch upload settimanale.

### 8. Smart Reservation Analytics (Occupancy)
**Scope**: ~16h | **Tier**: Avanzato | **Valore**: Revenue optimization +12%

Dashboard mostra: occupancy rate per fascia oraria/giorno. Pricing dinamico weekend. Predictive: "Prevediamo pieno sabato, 2 tavoli liberi lunedì".

### 9. Email Newsletter Trend Food + Wine Pairing
**Scope**: ~14h | **Tier**: Intermedio+ | **Valore**: Customer engagement +35%

Settimanale: "Cosa cuciniamo questa settimana". Foto + story + wine abbinamento + recipe download PDF.

### 10. Chef Availability Live (Video Chat Support)
**Scope**: ~20h | **Tier**: Premium | **Valore**: Premium booking +15%, customer satisfaction NPS +8

Chat video disponibilità: "Il nostro chef chat disponibile lunedì 18-20". Cliente consulta live diete speciali.

### 11. Corporate Catering Configurator
**Scope**: ~26h | **Tier**: Premium | **Valore**: B2B revenue stream €2000-5000/evento

Business client: scegli guest count (20/50/100) → menu suggeriti per budget. Preventivo PDF auto.

### 12. Menu Eco-Badge (Sourcing Locale)
**Scope**: ~12h | **Tier**: Intermedio+ | **Valore**: ESG positioning, 20% willingness-to-pay premium

Piatti con "+5km sourcing" badge. Green leaf icon. Fornitori link trasparenza (fornitore site). ESG marketing.

**Total**: 12 customizzazioni per €4.5k-7k, ROI medio 4-6 mesi.
