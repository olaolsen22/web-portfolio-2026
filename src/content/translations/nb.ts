import type { Translations } from './en';

export const nb: Translations = {
  common: {
    close: 'Lukk',
  },
  nav: {
    home: 'Hjem',
    journey: 'Reisen',
    work: 'Prosjekter',
    connect: 'Kontakt',
  },
  hero: {
    workStatus: 'Åpen for jobb',
    location: 'Norge 🇳🇴',
    name: 'OLA O.',
    title: 'FRONTEND-UTVIKLER',
    details:
      '**6 år** med å bygge grensesnitt som **fungerer** og **ser riktig ut**. God på detaljer, lett å jobbe med, og på vei over i fullstack. Jeg bruker **AI** for **å jobbe bedre**, ikke for å la det tenke for meg.',
    viewMyWork: 'Se arbeidet mitt',
  },
  techStack: {
    label: 'Teknologi',
    pause: 'Pause',
    play: 'Spill av',
  },
  journey: {
    title: 'Reisen',
    description: 'Veien hit',
  },
  selectedWork: {
    title: 'Personlige prosjekter',
    description: 'Ideer jeg bygger for meg selv',
    status: {
      live: 'Live',
      inProgress: 'Pågående',
      blueprinted: 'Planlagt',
    },
    github: 'GitHub',
    demo: 'Demo',
    viewImage: 'Se fullstendig bilde',
  },
  connect: {
    headline1: 'La oss',
    headline2: 'snakkes.',
    subtext: 'Åpen for nye muligheter og samarbeid. Ta gjerne kontakt.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'E-post',
  },
  accessibility: {
    enableAnimations:
      'Animasjoner er slått av basert på enhetens innstillinger. Vil du aktivere dem for dette nettstedet?',
    enableTransparency:
      'Gjennomsiktighetseffekter er slått av basert på enhetens innstillinger. Vil du aktivere dem?',
    keepOff: 'Nei takk',
    enable: 'Aktiver',
    changePreferences: 'Endre innstillinger for bevegelse og gjennomsiktighet',
    promptLabel: 'Visningsinnstillinger',
  },
  analyticsConsent: {
    label: 'Samtykke til analyse',
    message:
      'Kan jeg se hvilke seksjoner du leser og hvilke lenker du klikker på? Det hjelper meg å forbedre nettstedet. Enkel besøksstatistikk samles inn uansett.',
    allow: 'Tillat',
    decline: 'Nei takk',
    privacyNotice: 'Personvernerklæring',
  },
  footer: {
    credit: 'Designet og utviklet av',
    crafted: 'Bygget med React, TypeScript og Claude Code.',
    privacy: 'Personvernerklæring',
  },
  privacyNotice: {
    title: 'Personvernerklæring',
    whatSiteCollectsTitle: 'Hva dette nettstedet samler inn',
    whatSiteCollectsBody:
      'Dette nettstedet bruker ikke informasjonskapsler. Det teller besøk kun ved hjelp av informasjon nettleseren din uansett sender når siden lastes inn. Hvis du tillater det, måles også hvilke seksjoner du leser og hvilke lenker du klikker på. Begge deler er beskrevet nedenfor. Tema-, språk- og analysevalget ditt lagres i nettleserens localStorage og sendes aldri til noen server.',
    analyticsTitle: 'Besøksstatistikk (Umami)',
    analyticsBody:
      'Når du laster inn siden, registrerer serveren et besøk ved hjelp av informasjon nettleseren din sender med hver forespørsel: sideadressen, henvisende nettsted, nettleser, operativsystem og enhetstype, språk og omtrentlig plassering (land, region og by), som Netlify slår opp fra IP-adressen din. Ingenting leses fra eller lagres på enheten din for dette. IP-adressen din videresendes til Umami kun for å skille ulike besøkende fra hverandre, og lagres ikke sammen med statistikken. Formålet er å se hvor mange som besøker nettstedet og hvor de besøker fra, som er min berettigede interesse (GDPR art. 6 nr. 1 bokstav f). Du kan når som helst protestere: hvis nettleseren din sender et Global Privacy Control- eller Do Not Track-signal, registreres ikke besøket, og du kan også kontakte meg. Statistikken behandles på mine vegne av Umami Software, Inc., lagres i EU og oppbevares i 6 måneder. Umami er et amerikansk selskap og bruker amerikanske tjenesteleverandører, så opplysninger kan overføres til USA på grunnlag av EUs standardkontraktsklausuler i Umamis databehandleravtale.',
    analyticsBodyLinkPre: 'Se Umamis ',
    analyticsBodyLinkText: 'personvernerklæring',
    analyticsBodyLinkPost: ' for detaljer.',
    detailedTitle: 'Detaljert statistikk (kun med ditt samtykke)',
    detailedBody:
      'Hvis du velger «Tillat», kjører også Umamis skript i nettleseren din og registrerer hvilke seksjoner du blar til og hvilke lenker du klikker på (e-post, GitHub, LinkedIn og prosjektlenker), sammen med skjermstørrelsen din. Dette er basert på ditt samtykke (GDPR art. 6 nr. 1 bokstav a), og du kan når som helst trekke det tilbake nedenfor. Opplysningene behandles og lagres av Umami på samme måte som besøksstatistikken.',
    consentStatusOn: 'Detaljert statistikk er på.',
    consentStatusOff: 'Detaljert statistikk er av.',
    consentAllow: 'Tillat',
    consentWithdraw: 'Slå av',
    consentBrowserSignal:
      'Nettleseren din sender et personvernsignal, så det samles ikke inn statistikk.',
    netlifyTitle: 'Netlify (Hostingleverandør)',
    netlifyBody:
      'Dette nettstedet er hostet av Netlify, Inc. Som en del av å levere og sikre nettstedet samler Netlify automatisk inn standard tilgangslogger – inkludert besøkendes IP-adresser, nettlesertype, tidsstempler for forespørsler og HTTP-svarkoder. Denne behandlingen er basert på berettiget interesse og er nødvendig for drift av et offentlig hostet nettsted. Netlify oppbevarer tilgangslogger i mindre enn 30 dager. Netlify er basert i USA, og overføring av personopplysninger dit er dekket av Netlifys databehandleravtale.',
    netlifyBodyLinkPre: 'Se Netlifys ',
    netlifyBodyLinkText: 'personvernpolicy',
    netlifyBodyLinkPost: ' for detaljer.',
    gdprTitle: 'Dine rettigheter',
    gdprBody:
      'Etter GDPR – som gjelder i Norge gjennom EØS-avtalen og personopplysningsloven – har du rett til innsyn i, retting av, begrensning av og sletting av personopplysninger om deg, rett til å protestere mot behandling basert på berettiget interesse, og rett til å trekke tilbake samtykke når som helst. Statistikken knyttes ikke til navnet ditt og lagres ikke sammen med IP-adressen din, og kan derfor som regel ikke spores tilbake til deg. Henvendelser om serverlogger bør rettes til Netlify.',
    gdprBodyLinkPre: 'Du har også rett til å klage til Datatilsynet (',
    gdprBodyLinkPost: ').',
    questionsTitle: 'Kontakt',
    questionsBodyPre:
      'Nettstedet drives av Ola Talaba Olsen, som er ansvarlig for behandlingen som er beskrevet i denne erklæringen. Spørsmål kan sendes via ',
    questionsEmailLinkText: 'e-post',
    questionsBodyOr: ' eller ',
    questionsBodyPost: '.',
    close: 'Lukk',
  },
  banner: {
    langNote:
      'OBS: Norsk innhold er under utvikling. Teksten er KI-oversatt mens jeg lærer meg norsk. Takk for tålmodigheten!',
    dismiss: 'Lukk banner',
  },
  skipToContent: 'Hopp til hovedinnhold',
  site: {
    title: 'Ola O. - Frontend-utvikler',
  },
};
