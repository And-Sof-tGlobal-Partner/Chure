export interface MenuItem {
  id: string
  labelEn: string
  labelMn: string
  href?: string
  children?: MenuItem[]
}

export const menuItems: MenuItem[] = [
  {
    id: 'home',
    labelEn: 'Home',
    labelMn: 'Нүүр',
    href: '/{locale}',
  },
  {
    id: 'chure-music-llc',
    labelEn: 'Chure Music LLC',
    labelMn: 'Chure Music LLC',
    children: [
      {
        id: 'altai-yatga-prod',
        labelEn: 'Altai Yatga Production',
        labelMn: 'Алтай ятга үйлдвэрлэл',
        href: '/{locale}/culture-industry/altai-yatga',
      },
      {
        id: 'bogan-yatga-prod',
        labelEn: 'Bogan Yatga Production',
        labelMn: 'Буган ятга үйлдвэрлэл',
        href: '/{locale}/culture-industry/bogan-yatga',
      },
      {
        id: 'packaging',
        labelEn: 'Packaging',
        labelMn: 'Цүнх - Сав баглаа бодол',
        href: '/{locale}/culture-industry/packaging',
      },
      {
        id: 'chure-clothing',
        labelEn: 'Chure Brand Clothing',
        labelMn: 'Чүрэ брэндийн хувцас',
        href: '/{locale}/culture-industry/chure-clothing',
      },
      {
        id: 'gifts-prod',
        labelEn: 'Gift Production',
        labelMn: 'Бэлэг дурсгал үйлдвэрлэл',
        href: '/{locale}/culture-industry/gifts',
      },
    ],
  },
  {
    id: 'chure-yayalag',
    labelEn: 'Chure Yayalag Music',
    labelMn: 'Chure Yayalag Music',
    children: [
      {
        id: 'altai-tour',
        labelEn: 'Altai Yatga Tour',
        labelMn: 'Алтай ятгатай аялал',
        href: '/{locale}/chure-yayalag/altai-tour',
      },
    ],
  },
  {
    id: 'mongolian-music-ngo',
    labelEn: 'Mongolian Music Agency NGO',
    labelMn: 'Монгол хөгжмийн агентлаг ХҮХ',
    children: [
      {
        id: 'ethnic-music-study',
        labelEn: 'Ethnic Music Study',
        labelMn: 'Угсаатны хөгжим судлал',
        href: '/{locale}/ngo/ethnic-music-study',
      },
      {
        id: 'altai-music-study',
        labelEn: 'Altai Music Study',
        labelMn: 'Алтай ятгын судлал',
        href: '/{locale}/ngo/altai-music-study',
      },
      {
        id: 'ensemble-artists',
        labelEn: 'Ensemble Artists',
        labelMn: 'Хамтлаг уран бүтээлчид',
        href: '/{locale}/ngo/ensemble-artists',
      },
      {
        id: 'khatan-training',
        labelEn: 'Khatan Training Center',
        labelMn: 'Хатан ятга сургалтын төв',
        href: '/{locale}/ngo/khatan-training-center',
      },
      {
        id: 'archive',
        labelEn: 'Archive',
        labelMn: 'АРХИВ',
        href: '/{locale}/ngo/archive',
      },
    ],
  },
  {
    id: 'agui-auditorium',
    labelEn: 'AGUI O2 Auditorium',
    labelMn: 'AGUI O2 Театр',
    children: [
      {
        id: 'project-1',
        labelEn: 'Project 1: Cultural Heritage',
        labelMn: 'Project No1: Түүх өв соёлын танин мэдэхүйн танилцуулга тоглолт',
        href: '/{locale}/auditorium/project-1',
      },
      {
        id: 'project-2',
        labelEn: 'Project 2: School Education',
        labelMn: 'Project No2: ЕБС-ийн хүүхдүүдэд зориулсан танин мэдэхүй',
        href: '/{locale}/auditorium/project-2',
      },
      {
        id: 'project-3',
        labelEn: 'Project 3: Ancient Music Journey',
        labelMn: 'Project No3: Эртний дуу хөгжмийн аялал, оюун санааны жуулчлал',
        href: '/{locale}/auditorium/project-3',
      },
      {
        id: 'project-4',
        labelEn: 'Project 4: Professional Training',
        labelMn: 'Project No4: ТО/СУ',
        href: '/{locale}/auditorium/project-4',
      },
    ],
  },
  {
    id: 'chure-club',
    labelEn: 'Chure Club',
    labelMn: 'Chure Club',
    children: [
      {
        id: 'board',
        labelEn: 'Board of Directors',
        labelMn: 'Удирдах зөвлөл',
        href: '/{locale}/chure-club/board',
      },
      {
        id: 'membership',
        labelEn: 'Membership',
        labelMn: 'Гишүүнчлэл',
        href: '/{locale}/chure-club/membership',
      },
      {
        id: 'goals',
        labelEn: 'Goals',
        labelMn: 'Зорилго',
        href: '/{locale}/chure-club/goals',
      },
      {
        id: 'international-branch',
        labelEn: 'International Branch',
        labelMn: 'Гадаад салбар',
        href: '/{locale}/chure-club/international-branch',
      },
      {
        id: 'domestic-branch',
        labelEn: 'Domestic Branch',
        labelMn: 'Дотоод салбар',
        href: '/{locale}/chure-club/domestic-branch',
      },
    ],
  },
  {
    id: 'ensemble-artists',
    labelEn: 'Ensemble Artists',
    labelMn: 'Хамтлаг уран бүтээлчид',
    children: [
      {
        id: 'mugj-yatgach',
        labelEn: 'MUGJ Yatgach Ch.Mönkh - Erdene',
        labelMn: 'МУГЖ Ятгач Ч.Мөнх - Эрдэнэ',
        href: '/{locale}/ensemble/mugj-yatgach',
      },
      {
        id: 'borte',
        labelEn: 'Borte Ensemble',
        labelMn: 'Бөртэ хамтлаг',
        href: '/{locale}/ensemble/borte',
      },
      {
        id: 'altai-ensemble',
        labelEn: 'Altai Ensemble',
        labelMn: 'Алтай хамтлаг',
        href: '/{locale}/ensemble/altai',
      },
      {
        id: 'khatan-yatga',
        labelEn: 'Khatan Yatga Ensemble',
        labelMn: 'Хатан ятга чуулга',
        href: '/{locale}/ensemble/khatan-yatga',
      },
      {
        id: 'chure-choir',
        labelEn: 'Chure Choir',
        labelMn: 'Чүрэ дуулга',
        href: '/{locale}/ensemble/chure-choir',
      },
    ],
  },
  {
    id: 'education',
    labelEn: 'Education',
    labelMn: 'Сургалт',
    children: [
      {
        id: 'altai-yatga-training',
        labelEn: 'Altai Yatga Training',
        labelMn: 'Алтай ятга сургалт',
        href: '/{locale}/education/altai-yatga-training',
      },
      {
        id: 'bogan-yatga-training',
        labelEn: 'Bogan Yatga Training',
        labelMn: 'Буган ятга сургалт',
        href: '/{locale}/education/bogan-yatga-training',
      },
      {
        id: 'ethnic-music-training',
        labelEn: 'Ethnic Music Training',
        labelMn: 'Угсаатны дуу хөгжмийн сургалт',
        href: '/{locale}/education/ethnic-music-training',
      },
      {
        id: 'training-research-books',
        labelEn: 'Training & Research Books',
        labelMn: 'Сургалт судалгааны ном',
        href: '/{locale}/education/training-research-books',
      },
    ],
  },
  {
    id: 'events',
    labelEn: 'Events',
    labelMn: 'Үйл явдал',
    children: [
      {
        id: 'concert',
        labelEn: 'Concert',
        labelMn: 'Концерт',
        href: '/{locale}/events/concert',
      },
      {
        id: 'festival',
        labelEn: 'Festival',
        labelMn: 'Фестиваль',
        href: '/{locale}/events/festival',
      },
      {
        id: 'lecture',
        labelEn: 'Lecture',
        labelMn: 'Лекц',
        href: '/{locale}/events/lecture',
      },
      {
        id: 'exhibition',
        labelEn: 'Exhibition',
        labelMn: 'Үзэсгэлэн',
        href: '/{locale}/events/exhibition',
      },
      {
        id: 'ritual',
        labelEn: 'Ritual',
        labelMn: 'Тахилга',
        href: '/{locale}/events/ritual',
      },
    ],
  },
  {
    id: 'shopping',
    labelEn: 'Shopping',
    labelMn: 'Худалдаа',
    children: [
      {
        id: 'chure-brand-store',
        labelEn: 'CHURE Brand Store',
        labelMn: 'CHURE Брэнд дэлгүүр',
        href: '/{locale}/shop/chure-brand-store',
      },
      {
        id: 'chure-online-shop',
        labelEn: 'CHURE Online Shop',
        labelMn: 'CHURE Brand онлайн дэлгүүр',
        href: '/{locale}/shop/chure-online-shop',
      },
      {
        id: 'gifts',
        labelEn: 'Gift Souvenirs',
        labelMn: 'Бэлэг дурсгал',
        href: '/{locale}/shop/gifts',
      },
    ],
  },
  {
    id: 'contact',
    labelEn: 'Contact',
    labelMn: 'Холбоо барих',
    href: '/{locale}/contact',
  },
]
