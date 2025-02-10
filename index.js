const flight = {
    id: '145c01af48dd00002715248e_0',
    dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
    aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
    duration: {
      departure: 8400,
      return: 0,
      total: 8400,
    },
    fly_duration: '2h 20m',
    flyFrom: 'PRG',
    cityFrom: 'Prague',
    cityCodeFrom: 'PRG',
    countryFrom: {
      code: 'CZ',
      name: 'Czechia',
    },
    flyTo: 'BCN',
    cityTo: 'Barcelona',
    cityCodeTo: 'BCN',
    countryTo: {
      code: 'ES',
      name: 'Spain',
    },
    distance: 1359.54,
    airline: 'FR',
    pnr_count: 1,
    technical_stops: 0,
    price: 36,
    bags_price: {
      1: 34.95,
      2: 69.91,
    },
    baglimit: {
      hand_width: 20,
      hand_height: 40,
      hand_length: 55,
      hand_weight: 10,
      hold_width: 81,
      hold_height: 119,
      hold_length: 119,
      hold_dimensions_sum: 319,
      hold_weight: 20,
    },
    availability: {
      seats: 2,
    },
    conversion: {
      EUR: 36,
    },
    quality: 66.66659,
  };

  //Řešení
  //1
  document.body.innerHTML += 'Země odletu: ' + flight.countryFrom.name + '</br>' + 'Země příletu: ' + flight.countryTo.name;

  //2
  const baglimitMax = {
    hand_widthMax: 20,
    hand_heightMax: 40,
    hand_lengthMax: 55,
    hand_weightMax: 10,
    hold_widthMax: 81,
    hold_heightMax: 119,
    hold_lengthMax: 119,
    hold_dimensions_sumMax: 319,
    hold_weightMax: 20,
  };

//3
document.body.innerHTML += '<p>Povolené rozměry příručního zavazadla:' + '</br>' + 'Šířka: ' + baglimitMax.hand_widthMax + ' cm' + '</br>' + 'Výška: ' + baglimitMax.hand_heightMax + ' cm' + '</br>' + 'Délka: ' + baglimitMax.hand_lengthMax + ' cm' + '</br>' + 'Váha: ' + baglimitMax.hand_weightMax + ' kg' + '</p>';

//4
document.body.innerHTML += '<p>Cena za druhé zavazadlo: ' + Math.ceil(flight.bags_price[2]) + ' EUR' + '</p>';