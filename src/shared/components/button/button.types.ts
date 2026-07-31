/*
    버튼이 어떤 데이터를 받을 수 있는지만 관리
    타입은 여러곳에서 재사용이될 가능성이 높다
    
*/

import type {
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'

/**
 * 버튼 종류
 *
 * primary   : 기본
 * secondary : 보조
 * danger    : 삭제
 */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'

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
  | 'sm'
  | 'md'
  | 'lg'

/**
 * BoxButton Props
 *
 * ButtonHTMLAttributes를 상속받기 때문에
 * onClick
 * disabled
 * type
 * ...
 * 등을 따로 선언하지 않아도 사용할 수 있습니다.
 */
export interface BoxButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  height?: ButtonHeight
  width?: ButtonWidth
  isFull?: boolean
  loading?: boolean
}