## 📝 Item 3: 코드 생성과 타입이 관계 없음을 이해하기(Understand That Code Generation Is Independent of Types)

### 타입 스크립트 컴파일러 역할 2가지

1. 최신 타입 스크립트/ 자바스스크립트를 브라우저에서 동작할 수 있도록 구버전의 자바스크립트로 트랜스 파일(transpile)
2. 코드의 타입 오류를 체크

타입 스크릡트가 자바스크립트로 변환 될때 코드 내 의 타입에는 영향을 주지 않으며, 자바스크립트의 실행 시점에도 타입은 영향을 미치지 않는다.

```
트랜스파일(Transpile)
: 번역(translate) 과 컴파일(compile)이 합쳐진 신조어
- 소크보드를 동일한 동작을 하는 다른 형태의소스코드(다른 버전, 다른 언어 등)로 변환하는 행위를 의미
- 결과물이 여전히 컴파일되어야 하는 소스코드이기 때문에컴파일과는 구분해서 부름

```

-   **타입 오류가 있는 코드도 컴파일 가능**

-   **런타임에는 타입체크가 불가능**

-   **타입 연산은 런타임에 영향을 주지 않는다**

-   **런타임 타입은 선언된 타입과 다를 수 있다**

-   **타입스크립트 타입으로는 함수를 오버 로드 할 수 없다**

-   **타입 스크립트 타입은 런타임 성느에 영향을 주지 않는다**