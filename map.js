const map = L.map("map");
map.setView([52.488, -0.89], 7);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const markers = [
  {
    id: 1,
    latlng: [50.760918, 4.11017],
    name: "ВАЗ",
  },
  {
    id: 2,
    latlng: [47.492647, 19.051399],
    name: "ГАЗель",
  },
  {
    id: 3,
    latlng: [41.902689, 12.496176],
    name: "Lexus",
  },
  {
    id: 4,
    latlng: [43.779787, 11.265817],
    name: "Volkswagen",
  },
  {
    id: 5,
    latlng: [52.373057, 4.892557],
    name: "Lada",
  },
  {
    id: 6,
    latlng: [-22.90315, -43.189903],
    name: "Kia",
  },
  {
    id: 7,
    latlng: [38.716174, -9.141589],
    name: "Bentli",
  },
  {
    id: 8,
    latlng: [50.080293, 14.428983],
    name: "Porche",
  },
  {
    id: 9,
    latlng: [48.856663, 2.351556],
    name: "BMW",
  },
  {
    id: 10,
    latlng: [45.438095, 12.319029],
    name: "Honda",
  },
];

var list = document.getElementById("list");

markers.forEach(function (marker) {
  var name = marker.name;
  var latlng = marker.latlng;

  // add marker to the map
  var marker = L.marker(latlng).addTo(map);

  // add marker to the list
  var li = document.createElement("li");
  li.innerHTML = name;
  list.appendChild(li);

  // add event listener to the marker and the list item
  marker.addEventListener("click", function () {
    map.setView(latlng, 16);
  });

  li.addEventListener("click", function () {
    map.setView(latlng, 16);
  });
});
