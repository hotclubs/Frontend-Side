
import { getButtonClass } from './button.utils'
import type { BoxButtonProps } from './button.types'


/**
 * BoxButton
 *
 * 기본 사각형 형태의 버튼 컴포넌트
 *
 * 설계 의도:
 * - 버튼의 동작과 화면 렌더링만 담당
 * - 스타일 조합은 button.utils.ts 에 위임
 * - 타입 정의는 button.types.ts 에 위임
 *
 * 이렇게 역할을 분리하면:
 * - 디자인 변경 → button.styles.ts 수정
 * - 스타일 조합 변경 → button.utils.ts 수정
 * - Props 변경 → button.types.ts 수정
 *
 * 으로 영향 범위를 줄일 수 있음
 */
export function BoxButton({

  // 버튼 내부에 표시할 내용
  children,

  // 버튼 스타일 종류
  // 기본값: primary
  variant = 'primary',

  // 버튼 높이
  // 기본값: md
  height = 'md',

  // 버튼 너비
  // 기본값: md
  width = 'md',

  // 부모 영역 전체 너비 사용 여부
  isFull = false,

  // API 호출 등 처리 중 상태
  loading = false,

  // HTML 기본 disabled 속성
  disabled,

  // 외부에서 추가 스타일 전달
  className,

  // button 기본 type
  // form 내부에서 의도하지 않은 submit 방지
  type = 'button',

  // onClick 등 나머지 HTML button 속성
  ...props

}: BoxButtonProps) {


  return (

    <button

      // button type 명시
      // 기본 submit 동작 방지
      type={type}


      // 스타일 조합은 utils에게 위임
      className={getButtonClass({

        variant,

        height,

        width,

        isFull,

        className,

      })}


      // loading 상태도 버튼 비활성 처리
      // 사용자가 중복 클릭하는 것을 방지
      disabled={disabled || loading}


      // HTML button 기본 이벤트 전달
      {...props}

    >

      {
        // 현재는 간단히 텍스트 처리
        // 추후 Spinner 공통 컴포넌트로 교체 예정
        loading
          ? 'Loading...'
          : children
      }


    </button>

  )

}