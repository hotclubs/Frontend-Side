import {
  forwardRef,
} from 'react'


import {
  cn,
} from '@/shared/utils/cn'


import {
  useFormField,
} from '@/shared/components/form-field/useFormField'


import {
  BASE_INPUT_STYLE,
  INPUT_SIZE_STYLE,
} from './input.styles'


import type {
  BaseInputProps,
} from './input.types'



/**
 * BaseInput
 *
 * 프로젝트 공통 Input 컴포넌트
 *
 * 책임:
 *
 * - input UI 표현
 * - HTML input 속성 전달
 * - FormField Context 연동
 * - ref 전달
 *
 *
 * 하지 않는 것:
 *
 * - 값 관리
 * - validation 처리
 * - API 호출
 *
 *
 * 상태 관리는 상위 영역에서 담당한다.
 *
 * 예:
 * React Hook Form
 */
export const BaseInput = forwardRef<
  HTMLInputElement,
  BaseInputProps
>(

function BaseInput({

  /**
   * Input 크기
   *
   * 디자인 시스템에서 정의한 크기값
   *
   * sm : 작은 입력창
   * md : 기본 입력창
   * lg : 큰 입력창
   */
  size = 'md',


  /**
   * 화면별 추가 스타일
   *
   * 공통 스타일을 유지하면서
   * 필요한 경우 확장 가능하도록 제공
   */
  className,


  /**
   * HTML 기본 disabled 속성
   */
  disabled,


  /**
   * 나머지 HTML input 속성
   *
   * type
   * placeholder
   * maxLength
   * onChange
   *
   * 등 전달
   */
  ...props


}, ref) {


  /**
   * FormField Context 조회
   *
   * FormField 내부에서 사용:
   *
   * {
   *   id,
   *   error,
   *   required
   * }
   *
   * 사용 가능
   *
   * 단독 사용:
   * undefined
   */
  const field = useFormField()



  /**
   * 오류 상태 확인
   *
   * BaseInput은 validation 하지 않고
   * 전달받은 상태를 표현만 한다.
   */
  const hasError =
    Boolean(field?.error)



  return (

    <input


      /**
       * React Hook Form 연결 및
       * 외부 focus 제어를 위한 ref 전달
       */
      ref={ref}



      /**
       * HTML 기본 속성 전달
       *
       * type
       * placeholder
       * value
       * onChange
       *
       * 등을 그대로 지원
       */
      {...props}



      /**
       * id 우선순위
       *
       * 1순위:
       * FormField에서 생성한 id
       *
       * 2순위:
       * 단독 사용자가 전달한 id
       *
       * FormField가 연결 책임을 가지므로
       * Context 값을 우선한다.
       */
      id={
        field?.id ?? props.id
      }



      /**
       * 접근성 오류 상태 전달
       *
       * 스크린리더 및 브라우저에게
       * 현재 입력값이 오류 상태임을 알림
       */
      aria-invalid={
        hasError
      }



      /**
       * 입력 도움말/오류 메시지 연결
       *
       * FormField 내부:
       *
       * input
       *    |
       *    aria-describedby
       *    |
       * message
       *
       * 구조 생성
       */
      aria-describedby={
        field
          ? `${field.id}-message`
          : props['aria-describedby']
      }



      /**
       * 스타일 조합
       *
       * 기본 스타일
       * +
       * size
       * +
       * error
       * +
       * disabled
       * +
       * 외부 class
       */
      className={
        cn(

          BASE_INPUT_STYLE,


          INPUT_SIZE_STYLE[size],


          hasError &&
            'border-red-500',


          disabled &&
            'bg-gray-100',


          className

        )
      }



      /**
       * disabled는 마지막에 전달
       *
       * 명확하게 현재 상태를 적용
       */
      disabled={disabled}

    />

  )

}

)