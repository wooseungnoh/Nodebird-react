# 03/31

1. front 서버와 back 서버를 나누어 관리한다. 이것의 이점은 어느 한 부분의 서버에 사용자가 몰릴경우 그 서버만 증설을 하면 된다는 점이다. 또한 보다 깔끔해보인다.
2. eslint 를 사용하여 협업과정에서 개개인마다 다른 코딩 스타일을 통일한다.
3. eslint 는 .eslintrc 파일을 통해 설정 가능하다.
4. Next.js 에서 라우터는 React 처럼 router로 감싸고 route 설정하고 할 필요 없이 그냥
   Link 태그에 href 를 넣고 해당 컴포넌트의 파일명 을 써준뒤 안쪽에 a 태그를 써준다면 pages 폴더 안에서 알아서 찾아간다. 하위 폴더가 있다면 user/create 이런식으로 찾아가진다. 이게 next 의 편한점이라고 한다.
5. 사실 next 에서는 import React from "react" 를 쓰지 않아도 된다고 한다. 알아서 설정해준다고... 근데 Hooks 쓰려면 useState 나 useEffect 등을 써야함으로 어차피 나중엔 쓰게 된다고는 한다.
6. pages 디렉토리 안의 index.js 가 메인 화면이 될 것이다.

# 04/01

1. 디자인은 ant-design 사용하면 편리함. (어드민페이지 같은경우에는 그냥 이런거 채용해도 되고 커스터마이징도 가능함.)
2. layout 부분의 children 이란 react 의 하나의 props 전달 방식으로써 components 에 children 을 받을곳을 만들어 놓고 쓰이는곳에서 컴포넌츠 안에 JSX 를 넣어준다면 그 JSX 자체가 props 로 넘어가게 된다.
3. npm i antd (강의에서는 버전 3이어서 antd@3 으로 진행함) 설치 후 ant design 사이트에서 cdn 으로 css 를 가져와서 next 의 헤드에 넣어준다.
4. next Js 에서의 헤드는 정직하게 import Head from "next/head" 로 임폴트 해준뒤 안쪽에 Head 를 써주면 그게 헤드가 되고 그 안에 각종 소스를 넣어주면 적용이 된다.
5. profile 화면, signup 화면, index 메인화면 구성

# 04/02

1. signUp form 화면 구성
2. input 은 항상 onChange 와 value 가 짝을 지어야 한다.
3. 되도록 약자 사용하지 말기
4. antd 에서 type primary 는 파란 버튼을 의미 submit 기능을 넣고싶을때 htmlType="submit" 을 써야함
5. useState 는 함수, 조건문, 반복문 안에는 사용하지 말아야한다. 예외의 경우는 커스텀훅(custom Hook)을 만들때만 함수 안쪽에 사용해도 된다.
6. custom Hook 이란 기존 Hooks 에 별도의 기능을 첨가하여 새로운 hook 을 만들어 내는것을 말한다.

# 04/03

1. next.js 의 \_app.js 는 공통된 부분을 묶어서 레이아웃 분리를 할 수 있으며, 이런경우 쓸대없는 렌더링을 막는데에 효과가 있다.
2. \_app.js 의 안에 Component 는 알아서 다른 컴포넌트들을 그 안에 렌더해준다.
3. 너무 지나치게 과한 최적화는 효율에비하여 시간이 너무 오래걸리니 하지 않도록 한다.
4. 새로운 인풋을 만들고 memo 를 붙여 다른 컴포넌트가 리렌더링이 되지 않도록 만들어 줄 수있다.
     <pre><code>const TextInput = memo(({ value, onChange }) => {});</code></pre>
5. prop-types 를 통하여 부모로부터 받은 props 가 올바른 자료형인지 검증해 볼 수 있다.
6. npmjs.com/package/prop-types 에 prop types 를 어떻게 사용할 수 있는지 나와있다.
7. next 에 내장되어있는 특수한 페이지가 \_document.js, \_app.js, \_error.js 가 있다.
8. antd 의 그리드 시스템을 적용할때에는 행(Row), 열(Col) 을 import 하여 사용할 수 있으며, 옵션인 xs 는 모바일, sm 은 작은화면, md 는 중간화면, lg 는 큰화면이다.
9. antd 의 그리드 시스템은 기본적으로 반응형이다.
10. 24 를 기준으로 몇으로 나누느냐에 따라 컨텐츠 크기를 나눌 수 있다.
11. 자식 컴포넌트에게 props 를 넘기는 함수는 useCallback 으로 감싸준다.
12. 컴포넌트 분리의 가장 쉬운 조건 = 조건문, 반복문 안에 있는 컴포넌트
13. 프로필 화면 구성 2-6 완료


# 04/04
1. 프론트단의 레이아웃은 완료함.
2. 조건문, 반복문에 사용된것들을 모두 각개의 컴포넌트로 분리함.
3. 되도록 Form 은 state 를 사용하기 때문애 컴포넌트 분리를 하는게 좋음.

# 04/05
1. 리덕스 => 흩어진 state를 한곳에 모으고 필요한부분에서 필요한 state만 때어서 쓰기 편함. 
2. 리덕스는 별도의 state 를 가지고 있어 react 의 state를 쓰지 않아도 되나, 보통 함께 사용함.
3. 리덕스는 Action, Dispatch, Reducer, Store 이런 개념으로 나뉜다.
4. Action =>  state 를 바꾸는 행동 자체(state는 action을 통해만 바뀔수 있슴. react 의 setState 와 같음)
5. Dispatch => Action 을 실행
6. Store => state 를 모아놓은것.
7. Reducer => Action 의 결과로 State 가 어떻게 변화할지를 미리 정의해놓는것.
8. npm i redux react-redux (사실 리덕스는 리액트만을 위한것이 아니라 별도로 사용할 수 있음. 그래서 react-redux 를 설치해줘야함)
9. 리덕스는 state 를 하나로 뭉치는 역할을 하긴 하지만 한 파일에 몰아놓으면 너무 코드량이 방대해 지기에, state 를 별개의 store 로 쪼갠 후 root Store 로 묶어서 사용할 수 있다.(이 프로젝트에서는 reducers/index.js)
10. 스프레드 문법 => 새로운 객체를 생성하는 문법으로 리액트는 기존 state와 지금의 state가 달라졌는지를 파악하여 새로 렌더링을 하는데 객체의 경우 참조가 항상 같기떄문에 달라졌는지를 알아차리지 못한다. 때문에 새로운 객체를 생성하여 참조를 바꾸면 그때, state 가 바뀐걸 알아차리게 된다.
11. next 에 redux 를 붙이려면 npm i next-redux-wrapper 를 설치해주어야 함.
12. store 를 props 로 전달하는걸 next redux wrapper 이 해주고, 이를 적용시킬땐 하이오더 컴포넌트로 만들어 주어야 함. 이곳에서 미들웨어도 사용 가능함.(middlewares 의 배열 안에 미들웨어를 넣을 수 있슴.)
13. redux dev tools 로 리덕스의 실행여부, 혹은 타임머신 등의 디버깅 기능을 쉽게 사용할 수 있다.
14. <pre><code>const dispatch = useDispatch()</code></pre>를 이용하여 dispatch 한다.
15. useSelector 를 이용하여 원하는 State 만 꺼내어 쓸 수 있다.
16. dummy 데이터 모두 리덕스로 대체함. 3-8