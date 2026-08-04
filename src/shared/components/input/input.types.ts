import type {
  InputHTMLAttributes,
} from 'react'

/**
 * BaseInput 기본 Props
 *
 * HTML Input 속성을 그대로 지원한다.
 */
export interface BaseInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
}

/**
 * 값 변환 Input Props
 *
 * Controller와 연결되는 Input 전용 타입
 *
 * 일반 Input과 달리
 * onChange는 Event가 아니라
 * 변환된 값을 전달한다.
 */
export interface ValueInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value'
    | 'onChange'
  > {


  /**
   * 실제 Form 저장 값
   *
   * 예:
   * "50000000"
   */
  value?: string



  /**
   * 변환된 값 전달
   *
   * 예:
   * "50,000,000"
   *
   * ↓
   *
   * "50000000"
   */
  onChange?: (
    value: string
  ) => void

}