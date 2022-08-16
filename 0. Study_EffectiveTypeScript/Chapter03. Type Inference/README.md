# Chapter 03: 타입 추론(Type Inference)

## 📝 Item 19: 추론 가능한 타입을 사용해 장황한 코드 방지하기(Avoid Cluttering Your Code with Inferable Types)

## 📝 Item 20: 다른 타입에는 다른 변수 사용하기(Use Different Variables for Different Types)

## 📝 Item 21: 타입 넓히기(Understand Type Widening)

## 📝 Item 22: 타입 좁히기(Understand Type Narrowing)

## 📝 Item 23: 한꺼번에 객체 생성하기(Create Objects All at Once)

## 📝 Item 24: 일관성 있는 별칭 사용하기(Be Consistent in Your Use of Aliases)

## 📝 Item 25: 비동기 코드에는 콜백 대신 async 함수 사용하기(Use async Functions Instead of Callbacks for Asynchronous Code)

## 📝 Item 26: 타입 추론에 문맥이 어떻게 사용되는지 이해하기(Understand How Context Is Used in Type Inference)

### 문맥의 소실로 인해 오류가 발생하는 경우와 해결 방법

-   튜플 사용 시 주의점
-   객체 사용 시 주의점
-   콜백 사용 시 주의점

<br>

### 요약

-   타입 추론에서 문맥이 어떻게 쓰이는지 주의해서 살펴 보아야 합니다.
-   변수를 뽑아서 별도로 선언 했을때 오류가 발생한다면 타입 선언 을 추가해야 합니다.
-   변수가 정말로 상수라면 상수 단언(`as const`)을 사용해야 합니다. 그러나 상수 단언을 사용하며 정의한 곳 안리ㅏ 사용한 곳에서 오류가 발생하므로 주의해야 합니다.

<br>

## 📝 Item 27: 함수형 기법과 라이브러리로 타입 흐름 유지하기(Use Functional Constructs and Libraries to Help Types Flow)
