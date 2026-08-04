import {
  forwardRef,
} from 'react'


import {
  BaseInput,
} from '../BaseInput'


import type {
  ValueInputProps,
} from '../input.types'



/**
 * MoneyInput
 *
 * 금액 입력 전용 Input 컴포넌트
 *
 * 설계 목적:
 *
 * HTML Input은 사용자가 보는 표시값과
 * 실제 비즈니스에서 사용하는 값이 다른 경우가 많다.
 *
 * 예)
 *
 * 화면 표시:
 * 50,000,000
 *
 * 실제 Form Value:
 * 50000000
 *
 * 따라서 표시용 값과 저장용 값을 분리하고
 * 변환 책임을 이 컴포넌트에서 담당한다.
 *
 *
 * 책임:
 *
 * 1. 숫자 이외 입력 제거
 * 2. 천 단위 콤마 표시
 * 3. 순수 숫자값 전달
 *
 *
 * 하지 않는 것:
 *
 * - 최소/최대 금액 검증
 * - 필수값 검증
 * - 금융 계산 로직
 *
 * Validation:
 * Valibot Schema에서 담당한다.
 *
 *
 * 사용 위치:
 *
 * FormInput
 *      ↓
 * Controller
 *      ↓
 * MoneyInput
 *      ↓
 * BaseInput
 *
 */
export const MoneyInput =
forwardRef<
  HTMLInputElement,
  ValueInputProps
>(

function MoneyInput({

  /**
   * React Hook Form에서 전달받은 실제 값
   *
   * 예:
   * "50000000"
   */
  value = '',


  /**
   * 변환된 값을 Form으로 전달하는 함수
   *
   * 일반 Input은 Event를 전달하지만,
   * MoneyInput은 변환된 최종 값만 전달한다.
   *
   * 예:
   *
   * 화면 입력
   * 50,000,000
   *
   * 전달
   * "50000000"
   */
  onChange,


}, ref) {



  /**
   * Form Value를 화면 표시 형태로 변환
   *
   * 저장값:
   * 50000000
   *
   * 화면:
   * 50,000,000
   *
   * 이 변환은 표시 목적이며
   * 실제 데이터는 변경하지 않는다.
   */
  const displayValue =
    value
      ? Number(value)
          .toLocaleString()
      : ''



  /**
   * 사용자 입력 이벤트 처리
   *
   * 사용자가 콤마를 포함하거나
   * 문자를 입력해도
   *
   * 숫자만 추출하여
   * Form 상태에는 순수 숫자만 저장한다.
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {


    /**
     * 입력값 정제
     *
     * 예:
     * "50,000,000원"
     *
     * ↓
     *
     * "50000000"
     */
    const rawValue =
      e.target.value.replace(
        /[^0-9]/g,
        ''
      )



    /**
     * 변환된 실제 값을 전달
     *
     * Controller의 field.onChange와 연결된다.
     */
    onChange?.(
      rawValue
    )

  }



  return (

    <BaseInput

      /**
       * 외부 ref 전달
       *
       * React Hook Form,
       * 접근성,
       * Focus 제어를 위해 필요
       */
      ref={ref}


      /**
       * 화면 표시용 값
       */
      value={
        displayValue
      }


      /**
       * 변경 이벤트는
       * 일반 Event가 아니라
       * 변환된 값을 전달한다.
       */
      onChange={
        handleChange
      }


      /**
       * 숫자 키패드 표시
       *
       * 모바일 환경에서
       * 숫자 입력 UX 개선
       */
      inputMode="numeric"

    />

  )

}

)