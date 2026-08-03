import type {
  InputHTMLAttributes,
} from 'react'

/**
 * BaseInput Props
 *
 * 공통 Input 컴포넌트에서 사용하는 속성 정의
 *
 * HTML input 기본 속성은 그대로 사용하지만,
 * 디자인 시스템에서 관리하는 속성은 별도로 재정의한다.
 *
 * 예:
 * - placeholder
 * - disabled
 * - maxLength
 * - onChange
 *
 * 등은 HTML 기본 속성을 그대로 사용한다.
 */
export interface BaseInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'size'
  > {


  /**
   * Input 크기 옵션
   *
   * HTML input의 size(number)와 충돌하기 때문에
   * 기존 size 속성을 제거(Omit) 후
   * 디자인 시스템용 크기로 재정의한다.
   *
   * sm : 작은 입력창
   * md : 기본 입력창
   * lg : 큰 입력창
   */
  size?: 'sm' | 'md' | 'lg'

}