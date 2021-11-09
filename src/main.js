// Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')
  //fetch()로 JSON 데이터 간단히 불러오기
    .then(response => response.json())
    //개발자 툴로 console, network 잘 들어왔나 확인
    .then(json => json.items);
    //loadItems라는 함수는
    //fetch라는 API를 통하여 데이터를 받고
    //성공적으로 받아왔다면 json으로 변환하고
    //json 안에 있는 items 값을 받아옴
}

//main
loadItems()
  .then(items => {
    console.log(items);
    //displayItems(items)
    //setEventListeners(items)
  })
  .catch(console.log);