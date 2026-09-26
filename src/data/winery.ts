export interface WineItem {
  id: string;
  name: string;
  vintage: string;
  varietal: string;
  award: string;
  tastingNotes: string[];
  price: string;
  description: string;
}

export interface VenueExperience {
  id: string;
  name: string;
  subtitle: string;
  capacity: string;
  image: string;
  highlights: string[];
  description: string;
}

export const AWARD_WINNING_WINES: WineItem[] = [
  {
    id: 'merlot-reserve',
    name: 'Eastwood Reserve Merlot',
    vintage: '2020',
    varietal: '100% Virginia Merlot',
    award: "Governor's Cup Gold Medal Winner",
    tastingNotes: ['Black Cherry', 'Cacao', 'Toasted French Oak', 'Velvety Tannins'],
    price: '$44',
    description: 'Aged 18 months in neutral and new French oak. Rich dark fruit layered with subtle cedar and a refined, lingering finish.'
  },
  {
    id: 'cab-franc',
    name: 'Estate Cabernet Franc',
    vintage: '2021',
    varietal: 'Cabernet Franc',
    award: "Governor's Cup Gold Medal Winner",
    tastingNotes: ['Bramble Blackberry', 'Violet Petals', 'Crushed Graphite', 'Subtle Spice'],
    price: '$42',
    description: 'Virginia’s signature red varietal, grown on south-facing gravelly loam slopes. Vibrant acidity balanced with nuanced earth and fruit.'
  },
  {
    id: 'blanc-de-blancs',
    name: 'Méthode Champenoise Blanc de Blancs',
    vintage: '2022',
    varietal: '100% Chardonnay',
    award: "Governor's Cup Gold Medal Winner",
    tastingNotes: ['Crisp Green Apple', 'Brioche', 'Lemon Curd', 'Persistent Mousse'],
    price: '$48',
    description: 'Handcrafted traditional method sparkling wine aged on the lees. Bright minerality, exquisite bubbles, and celebratory elegance.'
  },
  {
    id: 'meritage',
    name: 'Eastwood Meritage Cuvee',
    vintage: '2021',
    varietal: 'Bordeaux-Style Blend',
    award: "Governor's Cup Gold Medal Winner",
    tastingNotes: ['Ripe Plum', 'Black Currant', 'Tobacco Leaf', 'Espresso'],
    price: '$46',
    description: 'Masterfully blended Cabernet Sauvignon, Merlot, and Petit Verdot. Full-bodied structure crafted for cellaring and celebration.'
  }
];

export const VENUE_EXPERIENCES: VenueExperience[] = [
  {
    id: 'mountaintop-overlook',
    name: 'The Mountaintop Overlook',
    subtitle: 'Panoramic Blue Ridge Ridge-line',
    capacity: 'Up to 200 Guests',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=85',
    highlights: ['360° Mountain Sunset Views', 'Private Ceremony Lawn', 'Twilight Fire Tables'],
    description: 'Perched at the highest elevation of the estate with uninterrupted views of the Blue Ridge Mountains. The crown jewel for sunset ceremonies and twilight celebrations.'
  },
  {
    id: 'the-barn-and-veranda',
    name: 'The Barn & Covered Veranda',
    subtitle: 'Estate Hearth & Dining Sanctuary',
    capacity: 'Indoor & Covered Outdoor Seating',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Wood-Fired Kitchen', 'Open-Air Veranda Tables', 'On-Site Cider & Beer Taps'],
    description: 'A warm, welcoming modern rustic barn featuring our full estate wine flights, house-crafted ciders, local beers, and seasonal farm-to-table dining.'
  },
  {
    id: 'virginia-wine-collective',
    name: 'Virginia Wine Collective',
    subtitle: 'Downtown Charlottesville Tasting Room',
    capacity: 'Urban Tasting Room & Bottle Shop',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Downtown Charlottesville Access', 'Curated Flights', 'Express Wine Pick-Up'],
    description: 'Located just three miles from the farm in the city center. Experience Eastwood wines, curated Virginia producer flights, and club allocations without leaving town.'
  },
  {
    id: 'winery-cottage',
    name: 'The Winery Cottage',
    subtitle: 'Secluded Vineyard Residence',
    capacity: 'Private Stay / Bridal Suite',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Private Terrace overlooking Vines', 'Luxury Bridal Suite', 'Walk-To-Tasting Access'],
    description: 'An intimate, beautifully appointed retreat nestled in the vineyard foothills. Available for wedding party preparation, romantic weekends, and wine country getaways.'
  }
];
