# Item 7: 타입이 값들의 집합이라고 생각하기(Think of Types as Sets of Values)

런타임에 모든 변수는 각자 고유한 값을 가집니다.<br>
그러나 코드가 실행되기 전(타입스크립트가 오률르 체크하는 순간)에는 타입을 가지고 있습니다.<br>
할당 가능한 값들의 집합은 타입의 범위<br>

-   never type
    가장 작은 집합은 아무것도 없는 공집합<br>

    ```javascript
    // 7-1
    const x: never = 12;
    // never type은 공집합이기 때문에 아무런 값도 할당 할 수 없다
    ```

-   literal type(;unit type)
    never type 다음으로 작은 집합으로 한가지 값만 포함하는 타입

    ```javascript
    // 7-2
    type A = 'A';
    type B = 'B';
    type Twelve = 12;
    ```

-   union type
    두개 혹은 세개로 묶는 경우
    3개 이상의 타입을 묶을 때도 동일하게 사용
    값들의 합집합
    ```javascript
    // 7-3t
    type AB = 'A' | 'B';
    type AB12 = 'A' | 'B' | 12;
    ```
