# Funzionalità per Tier — Ristorante

Tre livelli di template per ristorante fine dining e casual, dal sito vetrina alla piattaforma completa con AI sommelier e gestione tavoli.

## Tier Base — €600-900 (consegna 2-3 settimane)

**Per chi**: Ristorante che vuole presence online professionale e SEO locale.  
**Sforzo stimato**: ~90h.

### Funzionalità incluse

- **Home Hero** chef in cucina + CTA "Prenota Tavolo"
- **Menu Sezioni Strutturato**:
  - Antipasti, Piatti, Secondi, Dolci
  - Badge allergeni (glutine, latte, crostacei, ecc.)
  - Descrizione piatto + prezzo
  - Foto alta qualità
- **Storia Chef + Bio** sezione
- **Gallery** cucina, ambiente interno, terrazza, piatti
- **Form Prenotazione Tavolo**
  - Data/Ora/Numero posti/Note allergie
  - Email + SMS conferma
- **Carousel Recensioni TripAdvisor**
- **Schema Restaurant + AggregateRating** JSON-LD
- **Maps Integrata** indirizzo
- **Mobile-first responsive**

### Cosa NON è incluso

- Booking calendar realtime
- Gestione tavoli/prenotazioni internamente
- Multi-lingua
- Newsletter
- Integrazione POS

### Pricing add-on

| Add-on | Costo | Note |
|--------|-------|------|
| Dominio .it | €9/anno | Incluso anno 1 |
| Hosting + SSL | €50/anno | Rinnovabile |

---

## Tier Intermedio — €1.800-2.500 (consegna 4-6 settimane)

**Per chi**: Ristorante consolidato che vuole booking online e ridurre no-show.  
**Sforzo stimato**: ~280h.

### Funzionalità incluse (oltre al Base)

- **Booking Engine Full**
  - Calendar tavoli realtime
  - Multi-table selection (tavoli 4/6/8 posti)
  - Conferma email + SMS
  - Reminder 24h pre-prenotazione riduce no-show 30% → 10%
  - Cancellazione self-service (fino 48h prima)
  - Notifiche staff email nuovo prenotazione

- **Menu Degustazione Personalizzato AI**
  - Chef consiglia percorso piatti per 3-7 portate
  - Storage preferenze cliente (riservatezza)
  
- **Newsletter Stagionale**
  - Email piatti speciali (funghi porcini, tartufo, selvaggina)
  - Promozione happy hour sera
  - Tema evento speciale (festa patronale, San Valentino)

- **Prenotazione Wine Tasting** privata
  - Date/ore disponibili
  - Selezione 5-8 vini
  - Snack pairing menu

- **Multi-lingua IT/EN/DE/FR**
  - Attratta turisti + business travelers EU

- **POS Gateway Integration**
  - Lightspeed / Toast / iZettle
  - Split payment (coperto vs menu)
  - Receipt digital email (GDPR)

- **Sitemap dinamica** + Google Business Profile auto-sync

### Integrazioni

| Stack | Costo/anno | Note |
|-------|-----------|------|
| Lightspeed POS | €150-250 | Pro edition + booking addon |
| Stripe | 1.4% + €0.30 | Wine tasting deposits |
| SendGrid Email | €20-50 | Newsletter + transactional |

---

## Tier Avanzato — €4.500-7.000 (consegna 10-12 settimane)

**Per chi**: Ristorante stellato Michelin-level o catena 2-3 location con automazione completa.  
**Sforzo stimato**: ~550h.

### Funzionalità incluse (oltre all'Intermedio)

- **Chef AI Sommelier** (RAG on-prem Ollama llama3.1:8b)
  - Knowledge base: 500+ vini enoteche italiane/francesi
  - Pairing piatto → vino raccomandato + prezzo per calice
  - Allergie/restrizioni dieta → menu alternativo realtime
  - Diete: vegan, gluten-free, low-carb, FODMAP
  - Chat 24/7 "Consigli per cena stasera"

- **Table Management Live** su tablet per chef+staff
  - Real-time table status (pre-ordine, antipasti, main course, dessert, payment)
  - Kitchen display system (KDS) auto-push
  - Time-to-delivery tracking piatto
  - Alerts allergie per cucina

- **Loyalty + Referral Program**
  - Accumula punti prenotazione (1 € = 1 punto)
  - Bonus referral: amico prenota → entrambi +50 punti
  - 500 punti = cena gratis 2 persone
  - SMS notifica punti scadenza

- **Marketing Automation Segmentazione**
  - Frequent diners (3+ volte/mese) → VIP mail esclusiva
  - VIP exclusives: pre-menu degustazione privata
  - Inactive (0 visite > 6 mesi) → win-back "Ritorna da noi €10 buono"
  - Birthday month → personalizzato email promo

- **Video Chef Bio + Sourcing**
  - 3-5 minuti chef racconta filosofia cucina
  - Sourcing ingredienti: fornitore locale → storia → video
  - Certificazione DOP/IGP evidenziata
  - Storytelling Instagram Reels auto-push

- **Integrazione TheFork / Booking.com**
  - Push automatico prenotazioni dal loro canale → tuo booking engine
  - Sincronizzazione calendario no-overbooking
  - Revenue management: dynamic pricing weekend vs feriale

- **Multi-location Admin** (2-5 ristoranti)
  - Dashboard consolidato prenotazioni
  - Statistiche per location (occupancy rate, avg spend)
  - Menu centralizzato con varianti per location
  - Cross-location loyalty (50 punti Milano + 50 Roma = sconto Roma)

### Integrazioni Enterprise

| Stack | Costo/anno | Note |
|-------|-----------|------|
| Ollama AI (on-prem) | €0 | llama3.1:8b VPS locale |
| Lightspeed POS | €250-500 | Enterprise plan |
| TheFork API | Free | Booking sync |
| Matterport 360 Tour | €100-500 | Virtual restaurant tour |

---

## Confronto Tier

| Funzionalità | Base | Intermedio | Avanzato |
|---|:---:|:---:|:---:|
| Menu Sezioni | ✓ | ✓ | ✓ |
| Badge Allergeni | ✓ | ✓ | ✓ |
| Gallery + SEO | ✓ | ✓ | ✓ |
| **Booking Calendar** | — | ✓ | ✓ |
| **SMS Reminder** | — | ✓ | ✓ |
| **Self-service Cancellazione** | — | ✓ | ✓ |
| **Multi-lingua** | — | ✓ | ✓ |
| **Newsletter** | — | ✓ | ✓ |
| **Wine Tasting Booking** | — | ✓ | ✓ |
| **AI Sommelier RAG** | — | — | ✓ |
| **Table Management Live** | — | — | ✓ |
| **Loyalty + Referral** | — | — | ✓ |
| **Marketing Automation** | — | — | ✓ |
| **Chef Video + Sourcing** | — | — | ✓ |
| **TheFork Integration** | — | — | ✓ |
| **Multi-location** | — | — | ✓ |

---

## Manutenzione Ricorrente

| Piano | €/mese | Incluso |
|-------|---------|---------|
| **Basic** | €70 | Hosting + SSL + 1 backup/sett |
| **Standard** | €140 | Basic + 6h modifiche/mese + phone support |
| **Premium** | €280 | Standard + 18h modifiche/mese + CDN + AI model updates + competitor monitoring |

---

## Timeline Post-Deploy

### Sett. 1-4 (incluso)
- Lancio booking engine
- Setup SMS + email transactional
- Training staff prenotazioni

### Mese 2-3 (Standard plan)
- Fine-tuning menu foto
- SEO optimization locale + Google Business
- Wine list upload

### Mese 4+ (Premium plan)
- AI sommelier live
- Marketing automation campaign
- Multi-location se applicabile

---

## Caso Studio Reale

**Ristorante X (50 posti, Firenze)**:
- Base: €750 (sito vetrina)
- + Intermedio: €2.000 (booking online)
- Risultato: 25 prenotazioni/mese via sito vs 0 prima
- ROI: 8 mesi

---

**Contatta Federico per quotazione personalizzata.**

