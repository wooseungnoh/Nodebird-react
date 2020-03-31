# 03/31
1. front 서버와 back 서버를 나누어 관리한다. 이것의 이점은 어느 한 부분의 서버에 사용자가 몰릴경우 그 서버만 증설을 하면 된다는 점이다. 또한 보다 깔끔해보인다.
2. eslint 를 사용하여 협업과정에서 개개인마다 다른 코딩 스타일을 통일한다.
3. eslint 는 .eslintrc 파일을 통해 설정 가능하다.
4. Next.js 에서 라우터는 React 처럼 router로 감싸고 route 설정하고 할 필요 없이 그냥
Link 태그에 href 를 넣고 해당 컴포넌트 js 파일을 써준뒤 안쪽에 a 태그를 써준다면 pages 폴더 안에서 알아서 찾아간다. 하위 폴더가 있다면 user/create 이런식으로 찾아가진다. 이게 next 의 편한점이라고 한다.
5. 사실 next 에서는 import React from "react" 를 쓰지 않아도 된다고 한다. 알아서 설정해준다고... 근데 Hooks 쓰려면 useState 나 useEffect 등을 써야함으로 어차피 나중엔 쓰게 된다고는 한다.
6. pages 디렉토리 안의 index.js 가 메인 화면이 될 것이다.

# 04/01