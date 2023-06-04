const stations = [
  {
    id: 1,
    name: 'Кикинда - Центар',
    latitude: '45.821483',
    longitude: '20.454008',
    city: 'Кикинда',
  },
  {
    id: 2,
    name: 'Нови Сад - Спенс',
    latitude: '45.245065',
    longitude: '19.84119',
    city: 'Нови Сад',
  },
  {
    id: 3,
    name: 'Нови Сад - Лиман',
    latitude: '45.238642',
    longitude: '19.835704',
    city: 'Нови Сад',
  },
  {
    id: 4,
    name: 'Беочин - Центар',
    latitude: '45.208386',
    longitude: '19.721709',
    city: 'Беочин',
  },
  {
    id: 5,
    name: 'Сремска Митровица',
    latitude: '44.972185',
    longitude: '19.609349',
    city: 'Сремска Митровица',
  },
  {
    id: 6,
    name: 'Панчево - Содара',
    latitude: '44.862975',
    longitude: '20.64429',
    city: 'Панчево',
  },
  {
    id: 7,
    name: 'Београд - Стари град',
    latitude: '44.82112',
    longitude: '20.459113',
    city: 'Београд',
  },
  {
    id: 8,
    name: 'Београд - Панчевачки мост',
    latitude: '44.817608',
    longitude: '20.486829',
    city: 'Београд',
  },
  {
    id: 9,
    name: 'Београд - Нови Београд',
    latitude: '44.803179',
    longitude: '20.400152',
    city: 'Београд',
  },
  {
    id: 10,
    name: 'Београд - Мостар',
    latitude: '44.798746',
    longitude: '20.450184',
    city: 'Београд',
  },
  {
    id: 11,
    name: 'Београд - Врачар',
    latitude: '44.796959',
    longitude: '20.475288',
    city: 'Београд',
  },
  {
    id: 12,
    name: 'Београд - Зелено брдо',
    latitude: '44.786488',
    longitude: '20.521715',
    city: 'Београд',
  },
  {
    id: 13,
    name: 'Шабац',
    latitude: '44.749781',
    longitude: '19.693917',
    city: 'Шабац',
  },
  {
    id: 14,
    name: 'Костолац',
    latitude: '44.71749',
    longitude: '21.173399',
    city: 'Костолац',
  },
  {
    id: 15,
    name: 'Смедерево - Центар',
    latitude: '44.664084',
    longitude: '20.926729',
    city: 'Смедерево',
  },
  {
    id: 16,
    name: 'Обреновац - Центар',
    latitude: '44.659478',
    longitude: '20.204496',
    city: 'Обреновац',
  },
  {
    id: 17,
    name: 'Смедерево - Царина',
    latitude: '44.652336',
    longitude: '20.931675',
    city: 'Смедерево',
  },
  {
    id: 18,
    name: 'Смедерево - Радинац',
    latitude: '44.618723',
    longitude: '20.968773',
    city: 'Смедерево',
  },
  {
    id: 19,
    name: 'Смедерево - Раља',
    latitude: '44.593587',
    longitude: '20.971308',
    city: 'Смедерево',
  },
  {
    id: 20,
    name: 'Лозница',
    latitude: '44.53224',
    longitude: '19.214534',
    city: 'Лозница',
  },
  {
    id: 21,
    name: 'Зајача',
    latitude: '44.492586962886',
    longitude: '19.2425537109375',
    city: 'Зајача',
  },
  {
    id: 22,
    name: 'Ваљево',
    latitude: '44.273049',
    longitude: '19.899006',
    city: 'Ваљево',
  },
  {
    id: 23,
    name: 'Бор - Кривељ',
    latitude: '44.137878',
    longitude: '22.093133',
    city: 'Бор',
  },
  {
    id: 24,
    name: 'Бор - Брезоник',
    latitude: '44.098064',
    longitude: '22.091738',
    city: 'Бор',
  },
  {
    id: 25,
    name: 'Бор - Градски парк',
    latitude: '44.076003',
    longitude: '22.099514',
    city: 'Бор',
  },
  {
    id: 26,
    name: 'Бор - Институт за рударство и металургију',
    latitude: '44.059937',
    longitude: '22.101434',
    city: 'Бор',
  },
  {
    id: 27,
    name: 'Крагујевац',
    latitude: '44.011573',
    longitude: '20.925031',
    city: 'Крагујевац',
  },
  {
    id: 28,
    name: 'Косјерић',
    latitude: '44.002941',
    longitude: '19.905174',
    city: 'Косјерић',
  },
  {
    id: 29,
    name: 'Поповац ЦРХ',
    latitude: '43.910592',
    longitude: '21.508391',
    city: 'Поповац',
  },
  {
    id: 30,
    name: 'Зајечар',
    latitude: '43.902072',
    longitude: '22.273255',
    city: 'Зајечар',
  },
  {
    id: 31,
    name: 'Чачак',
    latitude: '43.893316',
    longitude: '20.345513',
    city: 'Чачак',
  },
  {
    id: 32,
    name: 'Параћин',
    latitude: '43.859649',
    longitude: '21.408121',
    city: 'Параћин',
  },
  {
    id: 33,
    name: 'Ужице',
    latitude: '43.854255',
    longitude: '19.843181',
    city: 'Ужице',
  },
  {
    id: 34,
    name: 'Краљево',
    latitude: '43.728017',
    longitude: '20.693602',
    city: 'Краљево',
  },
  {
    id: 35,
    name: 'Крушевац',
    latitude: '43.58547',
    longitude: '21.307667',
    city: 'Крушевац',
  },
  {
    id: 36,
    name: 'Каменички вис - ЕМЕП',
    latitude: '43.404011',
    longitude: '21.947746',
    city: 'Ниш',
  },
  {
    id: 37,
    name: 'Ниш - основна школа Свети Сава',
    latitude: '43.322554',
    longitude: '21.919025',
    city: 'Ниш',
  },
  {
    id: 38,
    name: 'Ниш - Инситут за јавно здравље',
    latitude: '43.316552',
    longitude: '21.913548',
    city: 'Ниш',
  },
  {
    id: 39,
    name: 'Копаоник',
    latitude: '43.28414',
    longitude: '20.802102',
    city: 'Копаоник',
  },
  {
    id: 40,
    name: 'Врање',
    latitude: '42.551125',
    longitude: '21.896556',
    city: 'Врање',
  },
  {
    id: 41,
    name: 'Суботица',
    latitude: '46.099435',
    longitude: '19.670468',
    city: 'Суботица ',
  },
  {
    id: 42,
    name: 'Кикинда',
    latitude: '45.817098',
    longitude: '20.44359',
    city: 'Кикинда',
  },
  {
    id: 43,
    name: 'Сомбор',
    latitude: '45.769515',
    longitude: '19.114429',
    city: 'Сомбор',
  },
  {
    id: 44,
    name: 'Зрењанин',
    latitude: '45.383467',
    longitude: '20.389666',
    city: 'Зрењанин',
  },
  {
    id: 45,
    name: 'Нови Сад - Шангај',
    latitude: '45.27237',
    longitude: '19.873331',
    city: 'Нови Сад',
  },
  {
    id: 46,
    name: 'Делиблатска пешчара',
    latitude: '44.94919',
    longitude: '21.06788',
    city: 'Вршац',
  },
  {
    id: 47,
    name: 'Оведска бара',
    latitude: '44.7351',
    longitude: '19.986282',
    city: 'Шабац',
  },
  {
    id: 48,
    name: 'Београд - Овча',
    latitude: '44.884112',
    longitude: '20.527552',
    city: 'Београд',
  },
  {
    id: 49,
    name: 'Beograd - Земун ТБ',
    latitude: '44.835246',
    longitude: '20.403299',
    city: 'Beograd',
  },
  {
    id: 50,
    name: 'Београд - Деспота Стефана',
    latitude: '44.8168146768154',
    longitude: '20.4699406027794',
    city: 'Београд',
  },
  {
    id: 51,
    name: 'Београд - Омладинских бригада',
    latitude: '44.805925',
    longitude: '20.398811',
    city: 'Београд',
  },
  {
    id: 52,
    name: 'Београд - Славија',
    latitude: '44.8029464067589',
    longitude: '20.4667648673058',
    city: 'Београд',
  },
  {
    id: 53,
    name: 'Београд - Обреновац',
    latitude: '44.6699995831708',
    longitude: '20.1973316073418',
    city: 'Београд',
  },
  {
    id: 54,
    name: 'Београд - Обреновац ушће',
    latitude: '44.629741',
    longitude: '20.011135',
    city: 'Београд',
  },
  {
    id: 55,
    name: 'Београд - Лазаревац',
    latitude: '44.384113',
    longitude: '20.265436',
    city: 'Београд',
  },
  {
    id: 56,
    name: 'Панчево - Цара Душана',
    latitude: '44.870226',
    longitude: '20.648069',
    city: 'Панчево',
  },
  {
    id: 57,
    name: 'Панчево - Ватрогасни дом',
    latitude: '44.8586504491852',
    longitude: '20.6491014361382',
    city: 'Панчево',
  },
  {
    id: 58,
    name: 'Панчево - Војловица',
    latitude: '44.8444518310066',
    longitude: '20.669236779213',
    city: 'Панчево',
  },
  {
    id: 59,
    name: 'Панчево - Старчево',
    latitude: '44.808258',
    longitude: '20.704773',
    city: 'Панчево',
  },
  {
    id: 62,
    name: 'Обреновац - депонија',
    latitude: '44.636952',
    longitude: '20.041396',
    city: 'Обреновац',
  },
  {
    id: 63,
    name: 'Бор - Тир Матео',
    latitude: '44.08162',
    longitude: '22.101531',
    city: 'Бор',
  },
  {
    id: 66,
    name: 'Бор - Градски парк',
    latitude: '44.066787',
    longitude: '22.102243',
    city: 'Бор',
  },
  {
    id: 67,
    name: 'Бор - Слатина',
    latitude: '44.040096',
    longitude: '22.162871',
    city: 'Бор',
  },
  {
    id: 68,
    name: 'Београд - Ада',
    latitude: '44.789343',
    longitude: '20.408971',
    city: 'Београд',
  },
  {
    id: 69,
    name: 'Велики Црљени',
    latitude: '44.4758084725346',
    longitude: '20.3089141845703',
    city: 'Београд',
  },
  {
    id: 70,
    name: 'Косјерић',
    latitude: '43.998275',
    longitude: '19.907228',
    city: 'Косјерић',
  },
];

const AirQualityID = 'a8f71ec0-0a68-4d4f-8f37-ceabdcb98569';

const PM25 = 6001;

const metricsMap = {
  0: 'perfect',
  1: 'good',
  2: 'acceptable',
  3: 'polluted',
  4: 'hazardous',
};

const PM25Metrics = [
  [0, 15],
  [15.01, 30],
  [30.01, 55],
  [55.01, 110],
  [110.01, 1000000],
];

const data = {
  // http://data.sepa.gov.rs/dataset/kvalitet-vazduha/resource/a8f71ec0-0a68-4d4f-8f37-ceabdcb98569
  airQualityId: AirQualityID,
  // http://data.sepa.gov.rs/dataset/kvalitet-vazduha/resource/7fa4ab3f-423a-4016-8508-37164b49c087
  componentId: PM25,
  // http://data.sepa.gov.rs/dataset/kvalitet-vazduha/resource/dd7f4e4b-2375-4657-bb91-d541a2759891
  stations: stations,
  // http://www.amskv.sepa.gov.rs/kriterijumi.php
  metrics: PM25Metrics,
  //
  metricsMap,
};

export default data;