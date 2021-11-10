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
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
  //JSON에서 받아온 각각의 item 객체들을 HTML li 태그의 배열 그룹으로 변환해서 container에 각각 추가
}

//Create HTML list item from the given data item
function createHTMLString(item) {
  return `
    <li class="item">
      <img src="${item.image}" alt="${item.type}" class="item_thumbnail">
      <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
  `;
  //원하는 문자열 형태로 리턴해주는 함수
}

//Handle button click
function onButtonClick(event, items) {
  //HTML buttons에 가서 data-key, data-value custom attributes 생성
  //console.log(event.target.dataset.key); 잘 나오는 지
  //console.log(event.target.dataset.value); 확인
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }
  //아무 값도 없을 때는 아무것도 리턴 x

  displayItems(items.filter(item => item[key] === value));
  //key와 value가 잁치하는 배열끼리 보여주기
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  //효율을 위해 아이템 각각이 아니라 logo, buttons 컨테이너에 이벤트 위임
  logo.addEventListener('click', () => displayItems(items));
  //logo를 click하면 전체 아이템이 보여지고
  buttons.addEventListener('click', event => onButtonClick(event, items));
  //button을 click하면 동작을 알맞게 정의한 함수 실행
  //on~으로 함수 naming하는 게 어떤 기능 나타내는 함수인지 직관적
}

//main
loadItems()
  .then(items => {
    //console.log(items);
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);