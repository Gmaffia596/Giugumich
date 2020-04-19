export let CAMPING = [
    {
        id: 1,
        name: 'Camping Village del Sole e del Turco',
        rating: 4,
        price: 150,
        sale_price: 120,
        location: {
          lat: -22.906847,
          lon: -43.172896,
        },
        address: 'Lungomare Enrico Mattei, 87, 71019 Vieste FG',
        description: 'Il Villaggio Camping è il luogo ideale per trascorrere le vacanze al mare in ampi spazi aperti, all’ombra di alberi di pino e di eucalipto, senza rinunciare al comfort e a servizi di qualità per tutta la famiglia.',
        // tslint:disable-next-line: max-line-length
        location_text: 'Situato a Vieste, a pochi metri dalla spiaggia del Pizzomunno, la principale del paese, a circa a 1500 metri dal centro, raggiungibile a piedi con una passeggiata sul suggestivo lungomare.',
        // tslint:disable-next-line: max-line-length
        features: 'Terreno sabbioso ed erboso, direttamente sul mare con spiaggia libera gratuita e a 100 mt  spiaggia attrezzata a pagamento e parco giochi',
        // tslint:disable-next-line: max-line-length
        pitch_services: 'Ogni piazzola in questo campeggio dispone di copertura wifi e di un bagno personale. Per il vostro confort, troverete al loro interno asciugacapelli. ',
        thumb: 'assets/img/camping/thumb/camping_1.jpg',
        images: [
          'assets/img/camping/thumb/camping_1.jpg',
          'assets/img/camping/thumb/camping_4.jpg',
          'assets/img/camping/thumb/camping_5.jpg',
          'assets/img/camping/thumb/camping_6.jpg'
        ],
        free_wifi: 1,
        services: [
          {
            id: 1,
            icon: 'checkmark-circle-outline',
            name: 'Pool'
          },
          {
            id: 2,
            icon: 'wifi',
            name: 'Internet'
          },
          {
            id: 3,
            icon: 'cafe',
            name: 'Breakfast'
          },
          {
            id: 4,
            icon: 'restaurant',
            name: 'Restaurant'
          },
          {
            id: 5,
            icon: 'easel',
            name: 'Conference'
          },
          {
            id: 6,
            icon: 'sunny',
            name: 'Beach'
          }
        ],
        numb_available_pitch: 3,
        reviews: [
          {
            id: 1,
            username: 'Mario Biondi',
            from: 'Chieti',
            title: 'Bel posto',
            // tslint:disable-next-line: max-line-length
            content: 'Lo staff del campeggio è stato molto disponibile per ogni evenienza, noessun problema. Il bar dispone di prodotti di qualità ad un ottimo prezzo. Uno dei migliori campeggi.',
            rating: 4
          },
          {
            id: 2,
            username: '',
            from: 'Roma',
            title: 'Contento',
            content: '4 notti. Staff molto efficiente. Facile da reperire.',
            rating: 4
          },
          {
            id: 3,
            username: 'Matt Doley',
            from: 'Cincinnati, US',
            title: 'Short stay',
            // tslint:disable-next-line: max-line-length
            content: 'Camping reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.',
            rating: 3
          },
          {
            id: 4,
            username: 'Giorgia Neri',
            from: 'Milano',
            title: 'Scontenta e costoso',
            // tslint:disable-next-line: max-line-length
            content: 'Non sono daccord con le condizioni di questo campeggio che sono l opposto rispetto all ultimo campeggio che ho visitato, ma lo staff è stato cordiale.',
            rating: 2
          }
        ],
        pitches: [
          {
            id: 1,
            active: 1,
            name: 'Deluxe pitch',
            beds: '1 king bed or 1 twin bed',
            numb_available_pitch: 4,
            refundable: 0,
            pitch_info: 'Free Parking, Free Internet and Free Breakfast.',
            thumb: 'assets/img/camping/thumb/camping_4.jpg',
            price: 120
          },
          {
            id: 2,
            active: 0,
            name: 'Grand Deluxe',
            beds: '1 king bed or 1 queen bed',
            numb_available_pitch: 2,
            refundable: 0,
            pitch_info: 'Free Internet and Free Breakfast.',
            thumb: 'assets/img/camping/thumb/camping_2.jpg',
            price: 180
          },
        ]
      },
      {
        id: 2,
        name: 'Camping Lido Salpi',
        rating: 4.7,
        price: 120,
        sale_price: 80,
        location: {
          lat: -22.969778,
          lon: -43.186859,
        },
        address: 'Riviera Sud - ex S.S. 159 Km 6,200, 71043 Manfredonia FG',
        description: 'Il Villaggio Camping è il luogo ideale per trascorrere le vacanze al mare in ampi spazi aperti, all’ombra di alberi di pino e di eucalipto, senza rinunciare al comfort e a servizi di qualità per tutta la famiglia.',
        // tslint:disable-next-line: max-line-length
        location_text: 'Situato a Manfredonia, a pochi metri dalla spiaggia del Pizzomunno, la principale del paese, a circa a 1500 metri dal centro, raggiungibile a piedi con una passeggiata sul suggestivo lungomare.',
        // tslint:disable-next-line: max-line-length
        features: 'Terreno sabbioso ed erboso, direttamente sul mare con spiaggia libera gratuita e a 100 mt  spiaggia attrezzata a pagamento e parco giochi',
        // tslint:disable-next-line: max-line-length
        pitch_services: 'Ogni piazzola in questo campeggio dispone di copertura wifi e di un bagno personale. Per il vostro confort, troverete al loro interno asciugacapelli. ',
        thumb: 'assets/img/camping/thumb/camping_2.jpg',
        images: [
          'assets/img/camping/thumb/camping_2.jpg',
          'assets/img/camping/thumb/camping_4.jpg',
          'assets/img/camping/thumb/camping_5.jpg',
          'assets/img/camping/thumb/camping_6.jpg'
        ],
        free_wifi: 1,
        services: [
          {
            id: 1,
            icon: 'checkmark-circle-outline',
            name: 'Pool'
          },
          {
            id: 2,
            icon: 'wifi',
            name: 'Internet'
          },
          {
            id: 3,
            icon: 'cafe',
            name: 'Breakfast'
          },
          {
            id: 4,
            icon: 'restaurant',
            name: 'Restaurant'
          },
          {
            id: 5,
            icon: 'easel',
            name: 'Conference'
          },
          {
            id: 6,
            icon: 'sunny',
            name: 'Beach'
          }
        ],
        numb_available_pitch: 12,
        reviews: [
          {
            id: 1,
            username: 'Mario Biondi',
            from: 'Chieti',
            title: 'Bel posto',
            // tslint:disable-next-line: max-line-length
            content: 'Lo staff del campeggio è stato molto disponibile per ogni evenienza, noessun problema. Il bar dispone di prodotti di qualità ad un ottimo prezzo. Uno dei migliori campeggi.',
            rating: 4
          },
          {
            id: 2,
            username: '',
            from: 'Roma',
            title: 'Contento',
            content: '4 notti. Staff molto efficiente. Facile da reperire.',
            rating: 4
          },
          {
            id: 3,
            username: 'Matt Doley',
            from: 'Cincinnati, US',
            title: 'Short stay',
            // tslint:disable-next-line: max-line-length
            content: 'Camping reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.',
            rating: 3
          },
          {
            id: 4,
            username: 'Giorgia Neri',
            from: 'Milano',
            title: 'Scontenta e costoso',
            // tslint:disable-next-line: max-line-length
            content: 'Non sono daccord con le condizioni di questo campeggio che sono l opposto rispetto all ultimo campeggio che ho visitato, ma lo staff è stato cordiale.',
            rating: 2
          }
        ],
        pitches: [
          {
            id: 1,
            active: 1,
            name: 'Deluxe pitch',
            beds: '1 king bed or 1 twin bed',
            numb_available_pitch: 1,
            refundable: 0,
            pitch_info: 'Free Parking, Free Internet and Free Breakfast.',
            thumb: 'assets/img/camping/thumb/camping_4.jpg',
            price: 120
          },
          {
            id: 2,
            active: 0,
            name: 'Grand Deluxe',
            beds: '1 king bed or 1 queen bed',
            numb_available_pitch: 2,
            refundable: 0,
            pitch_info: 'Free Internet and Free Breakfast.',
            thumb: 'assets/img/camping/thumb/camping_2.jpg',
            price: 180
          },
        ]
      },
      {
        id: 3,
        name: 'Eurovacanzevillaggi S.R.L.',
        rating: 4.5,
        price: 100,
        sale_price: 70,
        location: {
          lat: -22.984337,
          lon: -43.223142,
        },
        address: 'Via Salvatore Matarrese, 2, 70124 Bari BA',
        description: 'Il Villaggio Camping è il luogo ideale per trascorrere le vacanze al mare in ampi spazi aperti, all’ombra di alberi di pino e di eucalipto, senza rinunciare al comfort e a servizi di qualità per tutta la famiglia.',
        // tslint:disable-next-line: max-line-length
        location_text: 'Situato a Bari, a pochi metri dalla spiaggia del Pizzomunno, la principale del paese, a circa a 1500 metri dal centro, raggiungibile a piedi con una passeggiata sul suggestivo lungomare.',
        // tslint:disable-next-line: max-line-length
        features: 'Terreno sabbioso ed erboso, direttamente sul mare con spiaggia libera gratuita e a 100 mt  spiaggia attrezzata a pagamento e parco giochi',
        // tslint:disable-next-line: max-line-length
        pitch_services: 'Ogni piazzola in questo campeggio dispone di copertura wifi e di un bagno personale. Per il vostro confort, troverete al loro interno asciugacapelli. ',
        thumb: 'assets/img/camping/thumb/camping_3.jpg',
        images: [
          'assets/img/camping/thumb/camping_3.jpg',
          'assets/img/camping/thumb/camping_4.jpg',
          'assets/img/camping/thumb/camping_5.jpg',
          'assets/img/camping/thumb/camping_6.jpg'
        ],
        free_wifi: 1,
        services: [
          {
            id: 1,
            icon: 'checkmark-circle-outline',
            name: 'Pool'
          },
          {
            id: 2,
            icon: 'wifi',
            name: 'Internet'
          },
          {
            id: 3,
            icon: 'cafe',
            name: 'Breakfast'
          },
          {
            id: 4,
            icon: 'restaurant',
            name: 'Restaurant'
          },
          {
            id: 5,
            icon: 'easel',
            name: 'Conference'
          },
          {
            id: 6,
            icon: 'sunny',
            name: 'Beach'
          }
        ],
        numb_available_pitch: 5,
        reviews: [
          {
            id: 1,
            username: 'Mario Biondi',
            from: 'Chieti',
            title: 'Bel posto',
            // tslint:disable-next-line: max-line-length
            content: 'Lo staff del campeggio è stato molto disponibile per ogni evenienza, noessun problema. Il bar dispone di prodotti di qualità ad un ottimo prezzo. Uno dei migliori campeggi.',
            rating: 4
          },
          {
            id: 2,
            username: '',
            from: 'Roma',
            title: 'Contento',
            content: '4 notti. Staff molto efficiente. Facile da reperire.',
            rating: 4
          },
          {
            id: 3,
            username: 'Matt Doley',
            from: 'Cincinnati, US',
            title: 'Short stay',
            // tslint:disable-next-line: max-line-length
            content: 'Camping reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.',
            rating: 3
          },
          {
            id: 4,
            username: 'Giorgia Neri',
            from: 'Milano',
            title: 'Scontenta e costoso',
            // tslint:disable-next-line: max-line-length
            content: 'Non sono daccord con le condizioni di questo campeggio che sono l opposto rispetto all ultimo campeggio che ho visitato, ma lo staff è stato cordiale.',
            rating: 2
          }
        ],
        pitches: [
          {
            id: 1,
            active: 1,
            name: 'Deluxe pitch',
            beds: '1 king bed or 1 twin bed',
            numb_available_pitch: 1,
            refundable: 0,
            pitch_info: 'Free Parking, Free Internet and Free Breakfast.',
            thumb: 'assets/img/camping/thumb/camping_4.jpg',
            price: 120
          },
          {
            id: 2,
            active: 0,
            name: 'Grand Deluxe',
            beds: '1 king bed or 1 queen bed',
            numb_available_pitch: 2,
            refundable: 0,
            pitch_info: 'Free Internet and Free Breakfast.',
            thumb: 'assets/img/camping/thumb/camping_2.jpg',
            price: 180
          },
        ]
      },
      {
        id: 4,
        name: 'Camping La Masseria',
        rating: 3.3,
        price: 40,
        sale_price: 30,
        location: {
          lat: -22.933129,
          lon: -43.177427,
        },
        address: 'Via Tenuta di Torre Sabea, 73014 Gallipoli LE',
        description: 'Il Villaggio Camping è il luogo ideale per trascorrere le vacanze al mare in ampi spazi aperti, all’ombra di alberi di pino e di eucalipto, senza rinunciare al comfort e a servizi di qualità per tutta la famiglia.',
        // tslint:disable-next-line: max-line-length
        location_text: 'Situato a Gallipoli, a pochi metri dalla spiaggia del Pizzomunno, la principale del paese, a circa a 1500 metri dal centro, raggiungibile a piedi con una passeggiata sul suggestivo lungomare.',
        // tslint:disable-next-line: max-line-length
        features: 'Terreno sabbioso ed erboso, direttamente sul mare con spiaggia libera gratuita e a 100 mt  spiaggia attrezzata a pagamento e parco giochi',
        // tslint:disable-next-line: max-line-length
        pitch_services: 'Ogni piazzola in questo campeggio dispone di copertura wifi e di un bagno personale. Per il vostro confort, troverete al loro interno asciugacapelli. ',
        thumb: 'assets/img/camping/thumb/camping_4.jpg',
        images: [
          'assets/img/camping/thumb/camping_4.jpg',
          'assets/img/camping/thumb/camping_7.jpg',
          'assets/img/camping/thumb/camping_5.jpg',
          'assets/img/camping/thumb/camping_6.jpg'
        ],
        free_wifi: 1,
        services: [
          {
            id: 1,
            icon: 'checkmark-circle-outline',
            name: 'Pool'
          },
          {
            id: 2,
            icon: 'wifi',
            name: 'Internet'
          },
          {
            id: 3,
            icon: 'cafe',
            name: 'Breakfast'
          },
          {
            id: 4,
            icon: 'restaurant',
            name: 'Restaurant'
          },
          {
            id: 5,
            icon: 'easel',
            name: 'Conference'
          },
          {
            id: 6,
            icon: 'sunny',
            name: 'Beach'
          }
        ],
        numb_available_pitch: 5,
        reviews: [
          {
            id: 1,
            username: 'Mario Biondi',
            from: 'Chieti',
            title: 'Bel posto',
            // tslint:disable-next-line: max-line-length
            content: 'Lo staff del campeggio è stato molto disponibile per ogni evenienza, noessun problema. Il bar dispone di prodotti di qualità ad un ottimo prezzo. Uno dei migliori campeggi.',
            rating: 4
          },
          {
            id: 2,
            username: '',
            from: 'Roma',
            title: 'Contento',
            content: '4 notti. Staff molto efficiente. Facile da reperire.',
            rating: 4
          },
          {
            id: 3,
            username: 'Matt Doley',
            from: 'Cincinnati, US',
            title: 'Short stay',
            // tslint:disable-next-line: max-line-length
            content: 'Camping reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.',
            rating: 3
          },
          {
            id: 4,
            username: 'Giorgia Neri',
            from: 'Milano',
            title: 'Scontenta e costoso',
            // tslint:disable-next-line: max-line-length
            content: 'Non sono daccord con le condizioni di questo campeggio che sono l opposto rispetto all ultimo campeggio che ho visitato, ma lo staff è stato cordiale.',
            rating: 2
          }
        ],
        pitches: [
          {
            id: 1,
            active: 1,
            name: 'Deluxe pitch',
            beds: '1 king bed or 1 twin bed',
            numb_available_pitch: 1,
            refundable: 0,
            pitch_info: 'Free Parking, Free Internet and Free Breakfast.',
            thumb: 'assets/img/camping/thumb/camping_4.jpg',
            price: 120
          },
          {
            id: 2,
            active: 0,
            name: 'Grand Deluxe',
            beds: '1 king bed or 1 queen bed',
            numb_available_pitch: 2,
            refundable: 0,
            pitch_info: 'Free Internet and Free Breakfast.',
            thumb: 'assets/img/camping/thumb/camping_2.jpg',
            price: 180
          },
        ]
      },
      {
        id: 5,
        name: 'Camping Santo Stefano',
        rating: 3.5,
        price: 50,
        sale_price: 40,
        location: {
          lat: -22.984667,
          lon: -43.198593,
        },
        address: 'Contrada Santo Stefano, 70043 Monopoli BA',
        description: 'Il Villaggio Camping è il luogo ideale per trascorrere le vacanze al mare in ampi spazi aperti, all’ombra di alberi di pino e di eucalipto, senza rinunciare al comfort e a servizi di qualità per tutta la famiglia.',
        // tslint:disable-next-line: max-line-length
        location_text: 'Situato a Monopoli, a pochi metri dalla spiaggia del Pizzomunno, la principale del paese, a circa a 1500 metri dal centro, raggiungibile a piedi con una passeggiata sul suggestivo lungomare.',
        // tslint:disable-next-line: max-line-length
        features: 'Terreno sabbioso ed erboso, direttamente sul mare con spiaggia libera gratuita e a 100 mt  spiaggia attrezzata a pagamento e parco giochi',
        // tslint:disable-next-line: max-line-length
        pitch_services: 'Ogni piazzola in questo campeggio dispone di copertura wifi e di un bagno personale. Per il vostro confort, troverete al loro interno asciugacapelli. ',
        thumb: 'assets/img/camping/thumb/camping_5.jpg',
        images: [
          'assets/img/camping/thumb/camping_5.jpg',
          'assets/img/camping/thumb/camping_8.jpg',
          'assets/img/camping/thumb/camping_7.jpg',
          'assets/img/camping/thumb/camping_6.jpg'
        ],
        free_wifi: 1,
        services: [
          {
            id: 1,
            icon: 'checkmark-circle-outline',
            name: 'Pool'
          },
          {
            id: 2,
            icon: 'wifi',
            name: 'Internet'
          },
          {
            id: 3,
            icon: 'cafe',
            name: 'Breakfast'
          },
          {
            id: 4,
            icon: 'restaurant',
            name: 'Restaurant'
          },
          {
            id: 5,
            icon: 'easel',
            name: 'Conference'
          },
          {
            id: 6,
            icon: 'sunny',
            name: 'Beach'
          }
        ],
        numb_available_pitch: 4,
        reviews: [
          {
            id: 1,
            username: 'Mario Biondi',
            from: 'Chieti',
            title: 'Bel posto',
            // tslint:disable-next-line: max-line-length
            content: 'Lo staff del campeggio è stato molto disponibile per ogni evenienza, noessun problema. Il bar dispone di prodotti di qualità ad un ottimo prezzo. Uno dei migliori campeggi.',
            rating: 4
          },
          {
            id: 2,
            username: '',
            from: 'Roma',
            title: 'Contento',
            content: '4 notti. Staff molto efficiente. Facile da reperire.',
            rating: 4
          },
          {
            id: 3,
            username: 'Matt Doley',
            from: 'Cincinnati, US',
            title: 'Short stay',
            // tslint:disable-next-line: max-line-length
            content: 'Camping reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.',
            rating: 3
          },
          {
            id: 4,
            username: 'Giorgia Neri',
            from: 'Milano',
            title: 'Scontenta e costoso',
            // tslint:disable-next-line: max-line-length
            content: 'Non sono daccord con le condizioni di questo campeggio che sono l opposto rispetto all ultimo campeggio che ho visitato, ma lo staff è stato cordiale.',
            rating: 2
          }
        ],
        pitches: [
          {
            id: 1,
            active: 1,
            name: 'Deluxe pitch',
            beds: '1 king bed or 1 twin bed',
            numb_available_pitch: 1,
            refundable: 0,
            pitch_info: 'Free Parking, Free Internet and Free Breakfast.',
            thumb: 'assets/img/camping/thumb/camping_4.jpg',
            price: 120
          },
          {
            id: 2,
            active: 0,
            name: 'Grand Deluxe',
            beds: '1 king bed or 1 queen bed',
            numb_available_pitch: 2,
            refundable: 0,
            pitch_info: 'Free Internet and Free Breakfast.',
            thumb: 'assets/img/camping/thumb/camping_2.jpg',
            price: 180
          },
        ]
      },
      {
        id: 6,
        name: 'Camping Residence Villaggio San Michele',
        rating: 4.1,
        price: 65,
        sale_price: 45,
        location: {
          lat: -23.000371,
          lon: -43.365895,
        },
        address: 'Litoranea, Peschici - Vieste, Km 9, 71019 Vieste FG',
        description: 'Il Villaggio Camping è il luogo ideale per trascorrere le vacanze al mare in ampi spazi aperti, all’ombra di alberi di pino e di eucalipto, senza rinunciare al comfort e a servizi di qualità per tutta la famiglia.',
        // tslint:disable-next-line: max-line-length
        location_text: 'Situato a Vieste, a pochi metri dalla spiaggia del Pizzomunno, la principale del paese, a circa a 1500 metri dal centro, raggiungibile a piedi con una passeggiata sul suggestivo lungomare.',
        // tslint:disable-next-line: max-line-length
        features: 'Terreno sabbioso ed erboso, direttamente sul mare con spiaggia libera gratuita e a 100 mt  spiaggia attrezzata a pagamento e parco giochi',
        // tslint:disable-next-line: max-line-length
        pitch_services: 'Ogni piazzola in questo campeggio dispone di copertura wifi e di un bagno personale. Per il vostro confort, troverete al loro interno asciugacapelli. ',
        thumb: 'assets/img/camping/thumb/camping_6.jpg',
        images: [
          'assets/img/camping/thumb/camping_6.jpg',
          'assets/img/camping/thumb/camping_4.jpg',
          'assets/img/camping/thumb/camping_5.jpg',
          'assets/img/camping/thumb/camping_10.jpg'
        ],
        free_wifi: 1,
        services: [
          {
            id: 1,
            icon: 'checkmark-circle-outline',
            name: 'Pool'
          },
          {
            id: 2,
            icon: 'wifi',
            name: 'Internet'
          },
          {
            id: 3,
            icon: 'cafe',
            name: 'Breakfast'
          },
          {
            id: 4,
            icon: 'restaurant',
            name: 'Restaurant'
          },
          {
            id: 5,
            icon: 'easel',
            name: 'Conference'
          },
          {
            id: 6,
            icon: 'sunny',
            name: 'Beach'
          }
        ],
        numb_available_pitch: 12,
        reviews: [
          {
            id: 1,
            username: 'Mario Biondi',
            from: 'Chieti',
            title: 'Bel posto',
            // tslint:disable-next-line: max-line-length
            content: 'Lo staff del campeggio è stato molto disponibile per ogni evenienza, noessun problema. Il bar dispone di prodotti di qualità ad un ottimo prezzo. Uno dei migliori campeggi.',
            rating: 4
          },
          {
            id: 2,
            username: '',
            from: 'Roma',
            title: 'Contento',
            content: '4 notti. Staff molto efficiente. Facile da reperire.',
            rating: 4
          },
          {
            id: 3,
            username: 'Matt Doley',
            from: 'Cincinnati, US',
            title: 'Short stay',
            // tslint:disable-next-line: max-line-length
            content: 'Camping reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.',
            rating: 3
          },
          {
            id: 4,
            username: 'Giorgia Neri',
            from: 'Milano',
            title: 'Scontenta e costoso',
            // tslint:disable-next-line: max-line-length
            content: 'Non sono daccord con le condizioni di questo campeggio che sono l opposto rispetto all ultimo campeggio che ho visitato, ma lo staff è stato cordiale.',
            rating: 2
          }
        ],
        pitches: [
          {
            id: 1,
            active: 1,
            name: 'Deluxe pitch',
            beds: '1 king bed or 1 twin bed',
            numb_available_pitch: 1,
            refundable: 0,
            pitch_info: 'Free Parking, Free Internet and Free Breakfast.',
            thumb: 'assets/img/camping/thumb/camping_4.jpg',
            price: 120
          },
          {
            id: 2,
            active: 0,
            name: 'Grand Deluxe',
            beds: '1 king bed or 1 queen bed',
            numb_available_pitch: 2,
            refundable: 0,
            pitch_info: 'Free Internet and Free Breakfast.',
            thumb: 'assets/img/camping/thumb/camping_2.jpg',
            price: 180
          },
        ]
      },
      {
        id: 7,
        name: 'Camping Villaggio Lamaforca',
        rating: 4.0,
        price: 100,
        sale_price: 70,
        location: {
          lat: -23.791402,
          lon: -45.567807,
        },
        address: 'SS 379 Bari Brindisi Km 25 uscita Ostuni-Torre Pozzella-Lamaforca, 72012 Carovigno BR',
        description: 'Il Villaggio Camping è il luogo ideale per trascorrere le vacanze al mare in ampi spazi aperti, all’ombra di alberi di pino e di eucalipto, senza rinunciare al comfort e a servizi di qualità per tutta la famiglia.',
        // tslint:disable-next-line: max-line-length
        location_text: 'Situato a Carovigno, a pochi metri dalla spiaggia del Pizzomunno, la principale del paese, a circa a 1500 metri dal centro, raggiungibile a piedi con una passeggiata sul suggestivo lungomare.',
        // tslint:disable-next-line: max-line-length
        features: 'Terreno sabbioso ed erboso, direttamente sul mare con spiaggia libera gratuita e a 100 mt  spiaggia attrezzata a pagamento e parco giochi',
        // tslint:disable-next-line: max-line-length
        pitch_services: 'Ogni piazzola in questo campeggio dispone di copertura wifi e di un bagno personale. Per il vostro confort, troverete al loro interno asciugacapelli. ',
        thumb: 'assets/img/camping/thumb/camping_7.jpg',
        images: [
          'assets/img/camping/thumb/camping_7.jpg',
          'assets/img/camping/thumb/camping_8.jpg',
          'assets/img/camping/thumb/camping_10.jpg',
          'assets/img/camping/thumb/camping_9.jpg'
        ],
        free_wifi: 1,
        services: [
          {
            id: 1,
            icon: 'checkmark-circle-outline',
            name: 'Pool'
          },
          {
            id: 2,
            icon: 'wifi',
            name: 'Internet'
          },
          {
            id: 3,
            icon: 'cafe',
            name: 'Breakfast'
          },
          {
            id: 4,
            icon: 'restaurant',
            name: 'Restaurant'
          },
          {
            id: 5,
            icon: 'easel',
            name: 'Conference'
          },
          {
            id: 6,
            icon: 'sunny',
            name: 'Beach'
          }
        ],
        numb_available_pitch: 6,
        reviews: [
          {
            id: 1,
            username: 'Mario Biondi',
            from: 'Chieti',
            title: 'Bel posto',
            // tslint:disable-next-line: max-line-length
            content: 'Lo staff del campeggio è stato molto disponibile per ogni evenienza, noessun problema. Il bar dispone di prodotti di qualità ad un ottimo prezzo. Uno dei migliori campeggi.',
            rating: 4
          },
          {
            id: 2,
            username: '',
            from: 'Roma',
            title: 'Contento',
            content: '4 notti. Staff molto efficiente. Facile da reperire.',
            rating: 4
          },
          {
            id: 3,
            username: 'Matt Doley',
            from: 'Cincinnati, US',
            title: 'Short stay',
            // tslint:disable-next-line: max-line-length
            content: 'Camping reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.',
            rating: 3
          },
          {
            id: 4,
            username: 'Giorgia Neri',
            from: 'Milano',
            title: 'Scontenta e costoso',
            // tslint:disable-next-line: max-line-length
            content: 'Non sono daccord con le condizioni di questo campeggio che sono l opposto rispetto all ultimo campeggio che ho visitato, ma lo staff è stato cordiale.',
            rating: 2
          }
        ],
        pitches: [
          {
            id: 1,
            active: 1,
            name: 'Deluxe pitch',
            beds: '1 king bed or 1 twin bed',
            numb_available_pitch: 1,
            refundable: 0,
            pitch_info: 'Free Parking, Free Internet and Free Breakfast.',
            thumb: 'assets/img/camping/thumb/camping_4.jpg',
            price: 120
          },
          {
            id: 2,
            active: 0,
            name: 'Grand Deluxe',
            beds: '1 king bed or 1 queen bed',
            numb_available_pitch: 2,
            refundable: 0,
            pitch_info: 'Free Internet and Free Breakfast.',
            thumb: 'assets/img/camping/thumb/camping_2.jpg',
            price: 180
          },
        ]
      },
      {
        id: 8,
        name: 'Uria Camping & Village',
        rating: 4.1,
        price: 90,
        sale_price: 80,
        location: {
          lat: -9.010380,
          lon: -35.220805,
        },
        address: 'Isola Varano, 71010 Foce Varano FG',
        description: 'Il Villaggio Camping è il luogo ideale per trascorrere le vacanze al mare in ampi spazi aperti, all’ombra di alberi di pino e di eucalipto, senza rinunciare al comfort e a servizi di qualità per tutta la famiglia.',
        // tslint:disable-next-line: max-line-length
        location_text: 'Situato a Foce Varano, a pochi metri dalla spiaggia del Pizzomunno, la principale del paese, a circa a 1500 metri dal centro, raggiungibile a piedi con una passeggiata sul suggestivo lungomare.',
        // tslint:disable-next-line: max-line-length
        features: 'Terreno sabbioso ed erboso, direttamente sul mare con spiaggia libera gratuita e a 100 mt  spiaggia attrezzata a pagamento e parco giochi',
        // tslint:disable-next-line: max-line-length
        pitch_services: 'Ogni piazzola in questo campeggio dispone di copertura wifi e di un bagno personale. Per il vostro confort, troverete al loro interno asciugacapelli. ',
        thumb: 'assets/img/camping/thumb/camping_8.jpg',
        images: [
          'assets/img/camping/thumb/camping_8.jpg',
          'assets/img/camping/thumb/camping_9.jpg',
          'assets/img/camping/thumb/camping_5.jpg',
          'assets/img/camping/thumb/camping_6.jpg'
        ],
        free_wifi: 1,
        services: [
          {
            id: 1,
            icon: 'checkmark-circle-outline',
            name: 'Pool'
          },
          {
            id: 2,
            icon: 'wifi',
            name: 'Internet'
          },
          {
            id: 3,
            icon: 'cafe',
            name: 'Breakfast'
          },
          {
            id: 4,
            icon: 'restaurant',
            name: 'Restaurant'
          },
          {
            id: 5,
            icon: 'easel',
            name: 'Conference'
          },
          {
            id: 6,
            icon: 'sunny',
            name: 'Beach'
          }
        ],
        numb_available_pitch: 12,
        reviews: [
          {
            id: 1,
            username: 'Mario Biondi',
            from: 'Chieti',
            title: 'Bel posto',
            // tslint:disable-next-line: max-line-length
            content: 'Lo staff del campeggio è stato molto disponibile per ogni evenienza, noessun problema. Il bar dispone di prodotti di qualità ad un ottimo prezzo. Uno dei migliori campeggi.',
            rating: 4
          },
          {
            id: 2,
            username: '',
            from: 'Roma',
            title: 'Contento',
            content: '4 notti. Staff molto efficiente. Facile da reperire.',
            rating: 4
          },
          {
            id: 3,
            username: 'Matt Doley',
            from: 'Cincinnati, US',
            title: 'Short stay',
            // tslint:disable-next-line: max-line-length
            content: 'Camping reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.',
            rating: 3
          },
          {
            id: 4,
            username: 'Giorgia Neri',
            from: 'Milano',
            title: 'Scontenta e costoso',
            // tslint:disable-next-line: max-line-length
            content: 'Non sono daccord con le condizioni di questo campeggio che sono l opposto rispetto all ultimo campeggio che ho visitato, ma lo staff è stato cordiale.',
            rating: 2
          }
        ],
        pitches: [
          {
            id: 1,
            active: 1,
            name: 'Deluxe pitch',
            beds: '1 king bed or 1 twin bed',
            numb_available_pitch: 1,
            refundable: 0,
            pitch_info: 'Free Parking, Free Internet and Free Breakfast.',
            thumb: 'assets/img/camping/thumb/camping_4.jpg',
            price: 120
          },
          {
            id: 2,
            active: 0,
            name: 'Grand Deluxe',
            beds: '1 king bed or 1 queen bed',
            numb_available_pitch: 2,
            refundable: 0,
            pitch_info: 'Free Internet and Free Breakfast.',
            thumb: 'assets/img/camping/thumb/camping_2.jpg',
            price: 180
          },
        ]
      }
];
