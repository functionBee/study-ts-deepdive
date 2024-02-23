[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FfunctionBee%2Fstudy-ts-deepdive&count_bg=%23314858&title_bg=%233181C0&icon=typescript.svg&icon_color=%23E7E7E7&title=view&edge_flat=true)](https://hits.seeyoufarm.com)

# Deep Dive into TypeScript 🐳

이 레포지토리는 TypeScript에 대한 깊은 이해를 목표로 학습한 내용을 정리해놓은 문서입니다.

<br>

- [Deep Dive into TypeScript 🐳](#deep-dive-into-typescript-)
  - [📖 도서](#-도서)
      - [우아한 타입스크립트 with React](#우아한-타입스크립트-with-react)
  - [✨ Practice](#-practice)
    - [1. 타입스크립트란?](#1-타입스크립트란)
    - [2. 데이터 타입](#2-데이터-타입)
      - [2-1. 기본 타입](#2-1-기본-타입)
      - [2-2. 고급 타입](#2-2-고급-타입)
    - [3. 인터페이스와 클래스](#3-인터페이스와-클래스)
      - [3-1. 인터페이스](#3-1-인터페이스)
      - [3-2. 클래스](#3-2-클래스)
    - [4. 함수](#4-함수)
    - [5. 모듈](#5-모듈)
    - [6. 데코레이터](#6-데코레이터)
    - [7. 타입 호환성](#7-타입-호환성)
    - [8. 타입 추론](#8-타입-추론)
    - [9. 타입 가드](#9-타입-가드)
    - [10. 타입 별칭](#10-타입-별칭)
    - [11. 제네릭](#11-제네릭)
    - [12. 유틸리티 타입](#12-유틸리티-타입)
    - [13. 믹스인](#13-믹스인)
    - [14. 데드코드 제거](#14-데드코드-제거)
    - [15. 타입스크립트와 리액트](#15-타입스크립트와-리액트)
      - [15-1. 타입스크립트와 리액트](#15-1-타입스크립트와-리액트)
  - [References](#references)


<br>

## 📖 도서 

#### 우아한 타입스크립트 with React
: [우아한 타입스크립트 with React](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=258394491) 책을 기반으로 학습한 내용을 정리해놓은 문서입니다.

**목차**
- [Chapter 1](./ElegantTypeScriptWithReact/chapter1.md)
- [Chapter 2](./ElegantTypeScriptWithReact/chapter2.md)
- [Chapter 3](./ElegantTypeScriptWithReact/chapter3.md)
- [Chapter 4](./ElegantTypeScriptWithReact/chapter4.md)


<br>

## ✨ Practice

### 1. 타입스크립트란?
타입스크립트는 자바스크립트의 슈퍼셋으로, 정적 타입을 지원하는 언어입니다.

### 2. 데이터 타입

#### 2-1. 기본 타입 

| # | 제목 | 링크 |
|---|------|-------------|
| 01 | 타입 어노테이션 | [링크](./fundamentals/01_basic_types/01_type_annotations.ts) |
| 02 | 타입 추론 | [링크](./fundamentals/01_basic_types/02_type_inference.ts) |
| 03 | 타입 별칭 | [링크](./fundamentals/01_basic_types/03_type_aliases.ts) |
| 04 | 유니온 타입 | [링크](./fundamentals/01_basic_types/04_union_types.ts) |
| 05 | 인터섹션 타입 | [링크](./fundamentals/01_basic_types/05_intersection_types.ts) |
| 06 | 리터럴 타입 | [링크](./fundamentals/01_basic_types/09_literal_types.ts) |
| 07 | 열거형 | [링크](./fundamentals/01_basic_types/10_enums.ts) |
| 08 | 배열 타입 | [링크](./fundamentals/01_basic_types/11_array_types.ts) |
| 09 | 튜플 타입 | [링크](./fundamentals/01_basic_types/12_tuple_types.ts) |
| 10 | Any | [링크](./fundamentals/01_basic_types/13_any.ts) |
| 11 | Void | [링크](./fundamentals/01_basic_types/14_void.ts) |
| 12 | Never | [링크](./fundamentals/01_basic_types/15_never.ts) |
| 13 | Null과 Undefined | [링크](./fundamentals/01_basic_types/16_null_undefined.ts) |
| 14 | 객체 타입 | [링크](./fundamentals/01_basic_types/17_object_types.ts) |

#### 2-2. 고급 타입

| # | 제목 | 링크 |
|---|------|-------------|
| 01 | 타입 가드 | [링크](./fundamentals/01_basic_types/06_type_guards.ts) |
| 02 | 타입 캐스팅 | [링크](./fundamentals/01_basic_types/07_type_casting.ts) |
| 03 | 타입 단언 | [링크](./fundamentals/01_basic_types/08_type_assertions.ts) |
| 04 | 조건부 타입 | [링크](./advanced_types/01_conditional_types.ts) |
| 05 | 매핑된 타입 | [링크](./advanced_types/02_mapped_types.ts) |
| 06 | 유틸리티 타입 | [링크](./advanced_types/03_utility_types.ts) |
| 07 | 제네릭 타입과 인터페이스 | [링크](./advanced_types/04_generics_and_interfaces.ts) |
| 08 | 제네릭 클래스와 함수 | [링크](./advanced_types/05_generic_classes_functions.ts) |
| 09 | 데코레이터 | [링크](./advanced_types/06_decorators.ts) |

### 3. 인터페이스와 클래스
#### 3-1. 인터페이스

| # | 제목 | 링크 |
|---|------|-------------|
| 01 | 인터페이스 | [링크](./fundamentals/02_interfaces_and_classes/01_interfaces.ts) |
| 02 | 선택적 프로퍼티 | [링크](./fundamentals/02_interfaces_and_classes/02_optional_properties.ts) |
| 03 | 읽기 전용 프로퍼티 | [링크](./fundamentals/02_interfaces_and_classes/03_readonly_properties.ts) |
| 04 | 함수 타입 | [링크](./fundamentals/02_interfaces_and_classes/04_function_types.ts) |
| 05 | 인덱서블 타입 | [링크](./fundamentals/02_interfaces_and_classes/05_indexable_types.ts) |

#### 3-2. 클래스

| # | 제목 | 링크 |
|---|------|-------------|
| 01 | 클래스 | [링크](./fundamentals/02_interfaces_and_classes/06_classes.ts) |
| 02 | 상속 | [링크](./fundamentals/02_interfaces_and_classes/07_inheritance.ts) |
| 03 | 추상 클래스 | [링크](./fundamentals/02_interfaces_and_classes/08_abstract_classes.ts) |
| 04 | 인터페이스 vs 추상 클래스 | [링크](./fundamentals/02_interfaces_and_classes/09_interfaces_vs_abstract_classes.ts) |

### 4. 함수

| # | 제목 | 링크 |
|---|------|-------------|
| 01 | 함수 | [링크](./fundamentals/03_functions/01_functions.ts) |
| 02 | 함수 시그니처 | [링크](./fundamentals/03_functions/02_function_signatures.ts) |
| 03 | 화살표 함수 | [링크](./fundamentals/03_functions/03_arrow_functions.ts) |
| 04 | 오버로드 | [링크](./fundamentals/03_functions/04_overloads.ts) |

### 5. 모듈

| # | 제목 | 링크 |
|---|------|-------------|
| 01 | 모듈 | [링크](./fundamentals/04_modules/01_modules.ts) |
| 02 | 네임스페이스 | [링크](./fundamentals/04_modules/02_namespaces.ts) |
| 03 | 모듈 리파인먼트 | [링크](./fundamentals/04_modules/03_module_refinements.ts) |

### 6. 데코레이터

| # | 제목 | 링크 |
|---|------|-------------|
| 01 | 데코레이터 | [링크](./fundamentals/05_decorators/01_decorators.ts) |
| 02 | 클래스 데코레이터 | [링크](./fundamentals/05_decorators/02_class_decorators.ts) |
| 03 | 메서드 데코레이터 | [링크](./fundamentals/05_decorators/03_method_decorators.ts) |
| 04 | 프로퍼티 데코레이터 | [링크](./fundamentals/05_decorators/04_property_decorators.ts) |

### 7. 타입 호환성

| # | 제목 | 링크 |
|---|------|-------------|
| 01 | 타입 호환성 | [링크](./fundamentals/06_type_compatibility/01_type_compatibility.ts) |
| 02 | 공변성, 반변성, 불변성 | [링크](./fundamentals/06_type_compatibility/02_covariance_contravariance_invariance.ts) |

### 8. 타입 추론

| # | 제목 | 링크 |
|---|------|-------------|
| 01 | 타입 추론 | [링크](./fundamentals/07_type_inference/01_type_inference.ts) |
| 02 | 최상위 타입 컨텍스트 | [링크](./fundamentals/07_type_inference/02_top_level_type_context.ts) |

### 9. 타입 가드

| # | 제목 | 링크 |
|---|------|-------------|
| 01 | 타입 가드 | [링크](./fundamentals/08_type_guards/01_type_guards.ts) |
| 02 | 사용자 정의 타입 가드 | [링크](./fundamentals/08_type_guards/02_user_defined_type_guards.ts) |
| 03 | 타입 단언 | [링크](./fundamentals/08_type_guards/03_type_assertions.ts) |

### 10. 타입 별칭

| # | 제목 | 링크 |
|---|------|-------------|
| 01 | 타입 별칭 | [링크](./fundamentals/09_type_aliases/01_type_aliases.ts) |
| 02 | 문자열 리터럴 타입 | [링크](./fundamentals/09_type_aliases/02_string_literal_types.ts) |
| 03 | 숫자 리터럴 타입 | [링크](./fundamentals/09_type_aliases/03_number_literal_types.ts) |
| 04 | 불리언 리터럴 타입 | [링크](./fundamentals/09_type_aliases/04_boolean_literal_types.ts) |
| 05 | 유니온 타입 | [링크](./fundamentals/09_type_aliases/05_union_types.ts) |
| 06 | 인터섹션 타입 | [링크](./fundamentals/09_type_aliases/06_intersection_types.ts) |
| 07 | 타입 가드 | [링크](./fundamentals/09_type_aliases/07_type_guards.ts) |
| 08 | 타입 캐스팅 | [링크](./fundamentals/09_type_aliases/08_type_casting.ts) |

### 11. 제네릭

| # | 제목 | 링크 |
|---|------|-------------|
| 01 | 제네릭 | [링크](./fundamentals/10_generics/01_generics.ts) |
| 02 | 제네릭 함수 | [링크](./fundamentals/10_generics/02_generic_functions.ts) |
| 03 | 제네릭 인터페이스 | [링크](./fundamentals/10_generics/03_generic_interfaces.ts) |
| 04 | 제네릭 클래스 | [링크](./fundamentals/10_generics/04_generic_classes.ts) |
| 05 | 제네릭 제약 | [링크](./fundamentals/10_generics/05_generic_constraints.ts) |
| 06 | 제네릭 제약 조건 | [링크](./fundamentals/10_generics/06_generic_constraints_conditions.ts) |
| 07 | 제네릭 팩토리 | [링크](./fundamentals/10_generics/07_generic_factories.ts) |
| 08 | 제네릭 유틸리티 타입 | [링크](./fundamentals/10_generics/08_generic_utility_types.ts) |

### 12. 유틸리티 타입

| # | 제목 | 링크 |
|---|------|-------------|
| 01 | 유틸리티 타입 | [링크](./fundamentals/11_utility_types/01_utility_types.ts) |
| 02 | Partial | [링크](./fundamentals/11_utility_types/02_partial.ts) |
| 03 | Required | [링크](./fundamentals/11_utility_types/03_required.ts) |
| 04 | Readonly | [링크](./fundamentals/11_utility_types/04_readonly.ts) |
| 05 | Record | [링크](./fundamentals/11_utility_types/05_record.ts) |
| 06 | Pick | [링크](./fundamentals/11_utility_types/06_pick.ts) |
| 07 | Omit | [링크](./fundamentals/11_utility_types/07_omit.ts) |
| 08 | Exclude | [링크](./fundamentals/11_utility_types/08_exclude.ts) |
| 09 | Extract | [링크](./fundamentals/11_utility_types/09_extract.ts) |
| 10 | NonNullable | [링크](./fundamentals/11_utility_types/10_non_nullable.ts) |
| 11 | Parameters | [링크](./fundamentals/11_utility_types/11_parameters.ts) |
| 12 | ConstructorParameters | [링크](./fundamentals/11_utility_types/12_constructor_parameters.ts) |
| 13 | ReturnType | [링크](./fundamentals/11_utility_types/13_return_type.ts) |
| 14 | InstanceType | [링크](./fundamentals/11_utility_types/14_instance_type.ts) |
| 15 | ThisType | [링크](./fundamentals/11_utility_types/15_this_type.ts) |

### 13. 믹스인

| # | 제목 | 링크 |
|---|------|-------------|
| 01 | 믹스인 | [링크](./fundamentals/12_mixins/01_mixins.ts) |
| 02 | 믹스인 팩토리 | [링크](./fundamentals/12_mixins/02_mixin_factories.ts) |

### 14. 데드코드 제거

| # | 제목 | 링크 |
|---|------|-------------|
| 01 | 데드코드 제거 | [링크](./fundamentals/13_dead_code_elimination/01_dead_code_elimination.ts) |

### 15. 타입스크립트와 리액트
#### 15-1. 타입스크립트와 리액트

| # | 제목 | 링크 |
|---|------|-------------|
| 01 | 타입스크립트와 리액트 | [링크](./fundamentals/14_typescript_and_react/01_typescript_and_react.ts) |
| 02 | 타입스크립트와 리액트: 함수 컴포넌트 | [링크](./fundamentals/14_typescript_and_react/02_typescript_and_react_function_components.ts) |
| 03 | 타입스크립트와 리액트: 클래스 컴포넌트 | [링크](./fundamentals/14_typescript_and_react/03_typescript_and_react_class_components.ts) |
| 04 | 타입스크립트와 리액트: 이벤트 핸들러 | [링크](./fundamentals/14_typescript_and_react/04_typescript_and_react_event_handlers.ts) |

<br>

## References
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

<br>

[🔝](#deep-dive-into-typescript-)