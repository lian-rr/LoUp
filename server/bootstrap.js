if (Meteor.isServer) {
  Meteor.startup(function () {
    Locations.remove({});
    if (Locations.find().count() === 0) {

      var locations = [
        {
          name: "SIMPE",
          lat: 9.9711124,
          lng: -84.1273333,
          type: 'restaurant',
          points: 100,
          rate: 5,
          bonus: 1
        },
        {
          name: "AM/PM",
          lat: 9.9675813,
          lng: -84.1208379,
          type: 'restaurant',
          points: 100,
          rate: 5,
          bonus: 1
        },
        {
          name: "POPS",
          lat: 9.967784,
          lng: -84.120198,
          type: 'restaurant',
          points: 100,
          rate: 5,
          bonus: 1
        },
        {
          name: "SubWay",
          lat: 9.9677543,
          lng: -84.1202773,
          type: 'restaurant',
          points: 100,
          rate: 5,
          bonus: 1
        },
        {
          name: "Via Parc",
          lat: 9.967873,
          lng: -84.120444,
          type: 'restaurant',
          points: 100,
          rate: 5,
          bonus: 1
        },
        {
          name: "Becker & Loren",
          lat: 9.970164,
          lng: -84.135262,
          type: 'bar',
          points: 100,
          rate: 5,
          bonus: 1
        },
        {
          name: "Bar el Jardin",
          lat: 9.968334,
          lng: -84.120769,
          type: 'bar',
          points: 100,
          rate: 5,
          bonus: 1
        },
        {
          name: "Soda Teresita",
          lat: 9.985011,
          lng: -84.130914,
          type: 'restaurant',
          points: 100,
          rate: 5,
          bonus: 1
        },
        {
          name: "Escuela de Ciencias del deporte",
          lat: 9.9698282,
          lng: -84.1281331,
          type: 'restaurant',
          points: 100,
          rate: 5,
          bonus: 1
        }

      ];

      locations.forEach(function (m) {
        Locations.insert(m);
      });
    }
  })
}
