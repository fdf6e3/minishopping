#🛍 minishopping

##🔍 Project description

옷의 type과 color에 따라 구매 리스트를 필터링하는 동적인 shopping game

> HTML, CSS, JSON, Vanilla JS 활용 학습

##✏️ What I learned

###HTML

- VSCode 단축키 및 Emmet 사용 연습 필요
  - ex. option키 누른 상태로 다중 선택해서 동일한 텍스트 작성 가능 etc.
- class naming
  - class 이름에는 띄어쓰기 사용이 불가능함. 띄어쓰기를 포함하는 경우에는 여러 클래스를 할당하는 것! ex.btn colorBtn blue

###CSS

- flexbox 조합하는 거 연습 더 필요 ex. align-items
- :root로 변수 설정해서 템플릿처럼 사용함 _MDN https://mzl.la/3qll9IX_
  - calc: root에서 할당한 변수로 활용 할 수 있음 _MDN https://mzl.la/3BYr4pw_
- cursor: 마우스 커서 모양 변경 _MDN https://mzl.la/30ddLEK_
- transform: 아이템 변화 주는 것 _MDN https://mzl.la/2YxuIsI_
  - transition: 아이템 애니메이션 주는 것. 여기서는 transform과 조합 _MDN https://mzl.la/3kls7cR_
- button 스타일링: border _MDN https://mzl.la/3mXJ7rk_, outline _MDN https://mzl.la/3mVNSBV_, border-radius _MDN https://mzl.la/3CZe3x9_
- list-style: reset.css 넣을 필요 없이 리스트 스타일링 가능 _MDN https://mzl.la/3kkAgi2_
- overflow-y: 블록 레벨에서 스크롤 생성 _MDN https://mzl.la/3qlXOqr_

###JSON

- HTML 안에 데이터와 UI적 요소가 섞여있는 것은 좋지 않음
- JS는 비즈니스적 로직(=코드가 담겨있음)을 담당하는 곳이기 때문에 역시나 데이터를 함께 보관하기에 좋지 않음
- 따라서 데이터를 보관하는 곳은 따로 file이 될 수도 있고, 데이터베이스가 될 수도 있고, 백 엔드 서비스가 될 수도 있음
- 이번 프로젝트는 사이즈가 작고, 백 엔드 서비스가 없기 때문에 JSON을 이용해서 file을 생성해 마이그레이션 할 것임

###JavaScript

- fetch() _MDN https://mzl.la/3bWY3zH_
