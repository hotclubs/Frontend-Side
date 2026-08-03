import type {
  ButtonHTMLAttributes
} from 'react'


/**
 * 버튼 디자인 종류
 *
 * 디자인 시스템에서 허용하는 타입만 사용
 */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'outline'



/**
 * 버튼 높이
 */
export type ButtonHeight =
  | 'sm'
  | 'md'
  | 'lg'



/**
 * 버튼 너비
 */
export type ButtonWidth =
  | 'auto'
  | 'full'
  | 'md'
  | 'lg'



/**
 * BoxButton Props
 *
 * HTML button 속성을 기본으로 확장
 *
 * 예:
 * onClick
 * type
 * disabled
 * aria-label
 *
 * 모두 사용 가능
 */
export interface BoxButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {


  /**
   * 버튼 스타일
   */
  variant?: ButtonVariant



  /**
   * 버튼 높이
   */
  height?: ButtonHeight



  /**
   * 버튼 너비
   */
  width?: ButtonWidth



  /**
   * 부모 영역 전체 사용 여부
   */
  isFull?: boolean



  /**
   * API 처리 중 상태
   *
   * true:
   * - Spinner 표시
   * - 클릭 방지
   */
  loading?: boolean

}