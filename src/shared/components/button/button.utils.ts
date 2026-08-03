import { cn } from '@/shared/utils/cn'
import {
  BASE_STYLE,
  VARIANT_STYLE,
  HEIGHT_STYLE,
  WIDTH_STYLE,
  DISABLED_STYLE,
} from './button.styles'
import type {
  ButtonVariant,
  ButtonHeight,
  ButtonWidth,
} from './button.types'

/**
 * Button class 조합 함수
 *
 * 역할:
 * - Button에 필요한 Tailwind class 생성
 *
 * 컴포넌트와 스타일을 분리하기 위한 계층
 *
 * 사용:
 *
 * BoxButton
 *    ↓
 * getButtonClass()
 *    ↓
 * Tailwind class
 */
interface GetButtonClassParams {
  /**
   * 버튼 디자인 종류
   */
  variant: ButtonVariant
  /**
   * 버튼 높이
   */
  height: ButtonHeight
  /**
   * 버튼 너비
   */
  width: ButtonWidth
  /**
   * disabled 여부
   */
  disabled?: boolean
  /**
   * 외부 추가 class
   */
  className?: string
}

export function getButtonClass({
  variant,
  height,
  width,
  disabled,
  className,
}: GetButtonClassParams) {
  return cn(
    /**
     * 공통 버튼 스타일
     */
    BASE_STYLE,
    /**
     * variant별 스타일
     */
    VARIANT_STYLE[variant],
    /**
     * 높이
     */
    HEIGHT_STYLE[height],
    /**
     * 너비
     */
    WIDTH_STYLE[width],
    /**
     * disabled 스타일
     */
    disabled && DISABLED_STYLE,
    /**
     * 사용하는 곳에서 추가 스타일 허용
     */
    className,
  )
}