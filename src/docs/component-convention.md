# Component Convention

## 목적

프로젝트 전체에서 사용하는 공통 컴포넌트의 작성 규칙을 정의한다.

목표는 다음과 같다.

- 일관된 코드 스타일 유지
- 높은 재사용성
- 낮은 결합도
- 유지보수 용이성
- 접근성(A11y) 고려

---

# 폴더 구조

예)

shared/components/button

button/
│
├── BoxButton.tsx
├── button.types.ts
├── button.styles.ts
├── button.utils.ts
├── button.constants.ts
└── index.ts

---

# 파일 역할

## Component

UI를 렌더링하는 역할만 담당한다.

비즈니스 로직은 작성하지 않는다.

예)

BoxButton.tsx

---

## *.types.ts

Props

Interface

Type

정의만 작성한다.

---

## *.styles.ts

Tailwind 문자열

공통 스타일

Variant 스타일

Size 스타일

등을 관리한다.

---

## *.utils.ts

해당 컴포넌트에서만 사용하는

순수 함수

계산 함수

문자열 처리

등을 작성한다.

다른 컴포넌트에서 사용할 경우

shared/utils

로 이동한다.

---

## *.constants.ts

매직 넘버

기본값

Enum 성격의 상수

관리

---

## index.ts

외부에서 import 하는 진입점

항상 생성한다.

예)

import { BoxButton } from '@/shared/components/button'

---

# Props 작성 규칙

기본 HTML 속성은 최대한 확장한다.

예)

Button

extends ButtonHTMLAttributes<HTMLButtonElement>

Input

extends InputHTMLAttributes<HTMLInputElement>

---

HTML 속성과 이름이 충돌하면

Omit을 사용한다.

예)

Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

---

# 컴포넌트 책임

Component는

UI만 담당한다.

다음은 작성하지 않는다.

- API 호출
- Validation
- Business Logic

---

# 상태 관리

공통 컴포넌트는

상태를 최소한만 가진다.

상태 관리는

React Hook Form

TanStack Query

상위 Hook

에서 담당한다.

---

# Context 사용

같은 그룹의 컴포넌트가

동일 데이터를 사용할 경우

Props Drilling 대신

React Context를 사용한다.

예)

FormField

↓

FieldLabel

↓

BaseInput

---

# 주석 작성 규칙

모든 공통 컴포넌트는

왜 만들었는지

왜 이렇게 설계했는지

유지보수 시 참고할 내용을 주석으로 작성한다.

단순 구현 설명보다

설계 의도를 우선 작성한다.

---

# Import 규칙

항상 index.ts를 통해 import 한다.

예)

import { BaseInput } from '@/shared/components/input'

O

import { BaseInput } from '@/shared/components/input/BaseInput'

X