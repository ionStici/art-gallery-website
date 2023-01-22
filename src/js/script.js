const map = L.map("map").setView([41.480416, -71.31093], 15.4);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([41.480416, -71.31093]).addTo(map);
