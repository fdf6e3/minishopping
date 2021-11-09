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

//Update the list with the given items 
function displayItems(items) {
  const container = document.querySelector('.items');
  //items 클래스로 정의된 ul 태그를 container로 정의
  container.innerHTML = items.map(item => createHTMLString(item)).join('')
  //JSON에서 받아온 각각의 item 객체들을 HTML li 태그의 배열 그룹으로 변환해서 container에 각각 추가
}

//Create HTML list item from the given data item
function createHTMLString(item) {
  return `
    <li class="item">
      <img src="${item.image}}" alt="${item.type}" class="item_thumbnail">
      <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
  `;
  //원하는 문자열 형태로 리턴해주는 함수
}

//main
loadItems()
  .then(items => {
    console.log(items);
    displayItems(items)
    //setEventListeners(items)
  })
  .catch(console.log);