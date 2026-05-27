/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BirdSpecies, ExperienceItem, CustomerFeedback, AdmissionTicket } from './types';

// Import newly generated high-end visual assets
import heroImage from './assets/images/hero_papugarnia_1779902649335.png';
import familyParrotsImage from './assets/images/family_parrots_1779902671500.png';
import cockatooImage from './assets/images/close_up_cockatoo_1779902697078.png';
import handpanImage from './assets/images/handpan_tropical_1779902718395.png';
import logoImage from './assets/images/papugarnia_logo_1779903261639.png';

export { heroImage, familyParrotsImage, cockatooImage, handpanImage, logoImage };

export const BRAND_NAME = "Papugarnia Olsztyn";
export const ADDRESS = "ul. Lubelska 29C, 10-406 Olsztyn";
export const REGION = "woj. warmińsko-mazurskie";
export const PHONE = "+48 89 672 60 56";
export const HOURS = "Codziennie: 10:00 – 19:00";
export const GOOGLE_RATING = 4.6;
export const OPINIONS_COUNT = "ponad 1200";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/p/Papugarnia-Olsztyn-100064027838195/",
  instagram: "https://www.instagram.com/papugarnia.olsztyn/"
};

export const INSTAGRAM_EMBED_FEED = [
  "https://images.unsplash.com/photo-1552728089-57bdde30ebd3?auto=format&fit=crop&q=80&w=800", // Macaw
  "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=800", // Cockatoo
  "https://images.unsplash.com/photo-1480040829890-48343c6fc627?auto=format&fit=crop&q=80&w=800", // Budgerigar
  "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800"  // Parrot close-up
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Bliski Kontakt z Ptakami",
    subtitle: "Swobodny Lot Bez Klatek",
    description: "Ptaki siadają na dłoniach, ramionach i głowach. Przeżyj niesamowite, bezpośrednie interakcje, budując niezapomniane wspomnienia z egzotycznymi pieszczochami.",
    image: cockatooImage,
    accentText: "Wolność",
    behaviorTip: "Trzymaj dłoń płasko, gdy częstujesz karmą!"
  },
  {
    id: "exp-2",
    title: "Edukacja Przyrodnicza",
    subtitle: "Idealne dla Dzieci i Szkół",
    description: "Nasza hala to żywy podręcznik zoobotaniki. Dzieci bezpośrednio poznają gatunki z Azji, Afryki oraz Ameryk pod okiem troskliwego personelu udzielającego cennych wskazówek.",
    image: familyParrotsImage,
    accentText: "Edukacja",
    behaviorTip: "Nasi opiekunowie nauczą Cię jak dbać o dobrobyt ptaków."
  },
  {
    id: "exp-3",
    title: "Sprytne Pieszczoszki",
    subtitle: "Zasady Bezpiecznej Wizyty",
    description: "Zwierzęta są niezwykle ciekawskie i kochają błyszczące obiekty. Przed wejściem na halę należy zdjąć biżuterię, okulary, a także zabezpieczyć odstające guziki w ubraniach.",
    image: heroImage,
    accentText: "Zaufanie",
    behaviorTip: "Zdejmij biżuterię i zegarki przed wejściem na halę."
  },
  {
    id: "exp-4",
    title: "Muzyczny Relaks z Handpanem",
    subtitle: "Dźwięki Łagodzące Zmysły",
    description: "Ptaki niezwykle pozytywnie reagują na relaksacyjne tony bębnów typu handpan. Muzyczny motyw buduje unikalną, wyciszającą atmosferę wspierającą harmonię ze zwierzętami.",
    image: handpanImage,
    accentText: "Harmonia",
    behaviorTip: "Zatrzymaj się na chwilę i wsłuchaj w organiczny śpiew."
  }
];

export const SPECIES: BirdSpecies[] = [
  {
    id: "sp-1",
    name: "Ary",
    latinName: "Ara ararauna",
    description: "Wielkie, majestatyczne ptaki o niezwykle jaskrawym upierzeniu. Są symbolem wolności dorzecza Amazonki. Kochają siadać na ramionach i badać otoczenie z góry.",
    type: "large",
    origin: "Ameryka Południowa",
    funFact: "Ich uścisk dzioba jest niezwykle silny, lecz w interakcjach potrafią być niesamowicie delikatne i przyjazne.",
    colors: ["#3B82F6", "#FBBF24", "#EF4444"]
  },
  {
    id: "sp-2",
    name: "Kakadu",
    latinName: "Cacatuidae",
    description: "Eleganckie, śnieżnobiałe ptaki z charakterystycznym, podnoszącym się żółtym czubem. To wybitni pieszczorze spragnieni pieszczot, czułości oraz zaangażowanej zabawy.",
    type: "large",
    origin: "Australia i Azja",
    funFact: "Wyrażają swoje emocje poprzez unoszenie okazałego czuba na głowie. Są też sprytnymi testerami guzików!",
    colors: ["#FFFFFF", "#FDE047", "#1F2937"]
  },
  {
    id: "sp-3",
    name: "Papużki Faliste",
    latinName: "Melopsittacus undulatus",
    description: "Drobne, radosne i szalenie towarzyskie ptaki tworzące chmary barw. Są niesamowicie odważne, chętnie gromadzą się na dłoniach, by podbierać ziarenka karmy.",
    type: "small",
    origin: "Australia",
    funFact: "Znakomicie czują się w sporym stadzie. Ich delikatne i cichutkie trele działają niezwykle relaksująco.",
    colors: ["#22C55E", "#EAB308", "#3B82F6"]
  }
];

export const REVIEWS: CustomerFeedback[] = [
  {
    id: "rev-1",
    author: "Krzysztof Małecki",
    rating: 5,
    content: "Wspaniałe doświadczenie bliskiego kontaktu z ptakami. Brak tradycyjnych klatek robi ogromną różnicę, ptaki same lądują na ramionach. Dzieci były zachwycone, personel dba o bezpieczeństwo i instruuje wszystkich jak się zachować.",
    source: "Opinie Google"
  },
  {
    id: "rev-2",
    author: "Marta Wiśniewska",
    rating: 5,
    content: "Przepiękne miejsce na spędzenie deszczowego dnia w Olsztynie. Cały obiekt jest zadaszony, ciepły i luksusowo urządzony. Możliwość dokarmiania papug ze specjalnych kubeczków z karmą to strzał w dziesiątkę!",
    source: "Opinie Google"
  },
  {
    id: "rev-3",
    author: "Rafał Jaworski",
    rating: 5,
    content: "Zwierzęta są zadbane i pełne energii, uwielbiają głaskanie i wesołą interakcję. Obsługa chętnie opowiada o specyfice każdego ptaka. Muzyka bębnów handpan w tle dodaje temu miejscu niepowtarzalnego uroku. Gorąco polecam!",
    source: "Opinie Google"
  }
];

export const PRICING_INFO: AdmissionTicket[] = [
  {
    type: "Specjalna Karma dla Ptaków",
    price: "Sprzedawana na miejscu",
    note: "Jedyna bezpieczna karma, wspierająca zdrowie układu pokarmowego egzotycznych mieszkańców."
  },
  {
    type: "Wstęp do Papugarni",
    price: "Dostępny przy kasie",
    note: "Całoroczna hala tropikalna bez klatek, wolny lot, instruktaż i opieka wyszkolonych instruktorów."
  }
];
