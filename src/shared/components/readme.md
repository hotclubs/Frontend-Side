폴더 구조도
shared
└── components
    │
    ├── index.ts              ← 전체 공개
    │
    └── button
        │
        ├── index.ts          ← button 공개
        ├── BoxButton.tsx     ← 기본 버튼 화면
        ├── button.types.ts   ← 타입 정의
        ├── button.styles.ts  ← tailwind 스타일
        └── button.utils.ts   ← 조합 로직(버튼 스타일을 만들어주는 함수)
    └── docs          ⭐ 추가
        └── component-convention.m

    ButtonGroup을 만든다고 가정
    그럼면 variant 타입을 또 써야한다.
    그때
    import type {
       ButtonVariant
    }
    만 선언하면 중복 선언 x

    enum, 유니온 타입 차이
    enum은 런타임도 존재
    tyscript 컴파일시 객체가 생성됨
    enum Color {
         Red = 'red'
    }
         컴파일시 javascript 아래와같이 객체로 생성
    var Color = {
        Red: 'red'
    }
    반면 union type는 컴파일 후 완전히 사라짐 !! 타입 체크만 하고 런타임 코드가 늘어나지 않는다.

    react props 에서 enum도 사용가능하다
    <BoxButton
        variant={ButtonVariant.Primary}
    />
    반면 union type는 아래와 같이 JSX에서 읽기 쉽다.
    <BoxButton
        variant="primary"
    />
    서버와 약속된 값이 있을경우 사용
    enum UserRole {
        Admin = 'ADMIN',
        User = 'USER',
        Guest = 'GUEST',
    }
    이렇게 하면 오타도 줄이고 의미도 명확해짐

    우리가 사용할 방식
    상황                                        사용할 방식
    컴포넌트 Props (variant, size 등).           ✅ Union Type
    서버와 약속된 코드값                           ✅ enum 또는 as const 객체
    색상, 버튼 종류, 사이즈                        ✅ Union Type
    API 응답 코드, 권한 코드.                      ✅ enum 또는 상수 객체


BoxButton.tsx
↓
사용자 이벤트 처리

button.utils.ts
↓
스타일 조합

button.styles.ts
↓
Tailwind 클래스 관리

button.types.ts
↓
타입 관리

button
│
├── BoxButton.tsx
│   └── forwardRef 적용
│
├── button.types.ts
│
├── button.styles.ts
│
├── button.utils.ts
│
└── index.ts