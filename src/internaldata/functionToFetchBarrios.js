//variable to save all barrios
let allBarrios = ref([])

//------------function to get list of Areas in Valencia from public API - saved in /public/data
//------------save all data in a variable allBarrios
// https://valencia.opendatasoft.com/api/explore/v2.1/catalog/datasets/barris-barrios/records?limit=20 ----------------------------------------------------------------------------------------
let getBarrios = () => {
  fetch('/data/barris-barrios.json')
    .then((res) => res.json())
    .then((geojson) => {
      allBarrios.value = geojson
      barriosFiltered.value = geojson.filter((area) =>
        area.nombre.includes(inputValueFromSearchBar.value.trim().toUpperCase()),
      )

      //console.log(geojson);
    })
}
