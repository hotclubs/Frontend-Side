import type { ReactNode } from 'react'
/**
 * FieldLabel Props
 *
 * 입력 컴포넌트(Label)의 속성 정의
 *
 * 설계 이유
 * --------------------------------------
 * Label은 Input뿐 아니라
 * Select, DatePicker, CurrencyInput 등
 * 모든 입력 컴포넌트에서 공통으로 사용된다.
 *
 * 따라서 InputLabel이 아니라
 * FieldLabel이라는 이름을 사용한다.
 */
export interface FieldLabelProps {

  /**
   * 화면에 표시할 라벨 텍스트
   *
   * 예)
   * 차량가격
   * 계약자명
   */
  label: string

  /**
   * 필수 입력 여부
   *
   * true이면
   * "*" 표시
   */
  required?: boolean

  /**
   * 외부 스타일 확장
   */
  className?: string

}

/**
 * HelperText / ErrorMessage 공통 Props
 */
export interface FieldMessageProps {

  /**
   * 표시할 메시지
   */
  message?: string

  /**
   * 외부 스타일 확장
   */
  className?: string

}

/**
 * FormField Props
 *
 * 입력 컴포넌트를 감싸는
 * 공통 Field Layout
 */

export interface FormFieldProps {
  /**
   * Label 표시 텍스트
   */
  label: string

  /**
   * 필수 입력 여부
   *
   * Label의 * 표시 제어
   */
  required?: boolean

  /**
   * 정상 상태 안내 문구
   */
  helperText?: string

  /**
   * Validation 실패 메시지
   */
  error?: string

  /**
   * 실제 입력 컴포넌트
   *
   * Input
   * Select
   * DatePicker
   * 등 모두 가능
   */
  children: ReactNode

  /**
   * 외부 스타일 확장
   */
  className?: string

}