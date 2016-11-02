if(Meteor.isServer){
  Meteor.startup(function (){
    if(Markers.find().count() === 0){
      var markers = [
        {
          name: "SIMPE",
          lat: 9.9711124,
          lng: -84.1273333,
          type: 'restaurant'
        },
        {
          name: "AM/PM",
          lat: 9.9675813,
          lng: -84.1208379,
          type: 'restaurant'
        },
        {
          name: "POPS",
          lat: 9.967784,
          lng: -84.120198,
          type: 'restaurant'
        },
        {
          name: "SubWay",
          lat: 9.9677543,
          lng: -84.1202773,
          type: 'restaurant'
        },
        {
          name: "Via Parc",
          lat: 9.967873,
          lng: -84.120444,
          type: 'restaurant'
        },
        {
          name: "Becker & Loren",
          lat: 9.970164,
          lng: -84.135262,
          type: 'bar'
        },
        {
          name: "Bar el Jardin",
          lat: 9.968334,
          lng: -84.120769,
          type: 'bar'
        },
        {
          name: "Soda Teresita",
          lat: 9.985011,
          lng: -84.130914,
          type: 'restaurant'
        },
        {
          name: "Escuela de Ciencias del deporte",
          lat: 9.9698282,
          lng: -84.1281331,
          type: 'restaurant'
        }

      ];

      markers.forEach(m => Markers.insert(m));
    }
  })
}
