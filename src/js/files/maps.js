export default function maps() {
  const roadMap = document.querySelector("#road-map");

  if (roadMap) {
    function init() {
      const center = JSON.parse(roadMap.dataset.center);
      const zoom = Number(roadMap.dataset.zoom);

      const map = new ymaps.Map("road-map", {
        center,
        zoom
      });

      const placemark = new ymaps.Placemark(
        center,
        {},
        {
          iconLayout: "default#image",
          iconImageSize: [45, 45],
          iconImageHref: "../img/icons/location.png",
          iconImageOffset: [-20, -35],
        }
      );

      map.controls.remove("geolocationControl"); // удаляем геолокацию
      map.controls.remove("searchControl"); // удаляем поиск
      map.controls.remove("trafficControl"); // удаляем контроль трафика
      map.controls.remove("typeSelector"); // удаляем тип
      map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove("zoomControl"); // удаляем контрол зуммирования
      map.controls.remove("rulerControl"); // удаляем контрол правил
      map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

      map.geoObjects.add(placemark);
    }

    ymaps.ready(init);
  }
}
