/**
 * Button 스타일를 조합하는 유틸 함수
 *
 * 목적
 * 1. BoxButton는 "동작"만 담당한다.
 * 2. 스타일 조합은 이 파일이 담당한다.
 */
import { cn } from '@/shared/utils/cn'

import {
  BASE_STYLE,
  HEIGHT_STYLE,
  WIDTH_STYLE,
  VARIANT_STYLE,
} from './button.styles'

import type {
  ButtonHeight,
  ButtonVariant,
  ButtonWidth,
} from './button.types'


/**
 * 버튼 className 생성 함수
 *
 * Button 컴포넌트에서는
 * Tailwind 조합 로직을 몰라도 됩니다.
 *
 * 필요한 값만 전달하면
 * 최종 className을 만들어 반환합니다.
 */
interface GetButtonClassOptions {

  // 버튼 색상 타입
  variant: ButtonVariant

  // 버튼 높이
  height: ButtonHeight

  // 버튼 너비
  width: ButtonWidth

  // 부모 영역 전체 사용 여부
  isFull: boolean

  // 사용자가 추가로 넣는 class
  className?: string
}


export function getButtonClass({

  variant,

  height,

  width,

  isFull,

  className,

}: GetButtonClassOptions) {


  return cn(

    // 공통 버튼 스타일
    BASE_STYLE,


    // variant 스타일
    VARIANT_STYLE[variant],


    // 높이
    HEIGHT_STYLE[height],


    // 너비
    WIDTH_STYLE[width],


    // 전체 너비
    isFull && 'w-full',


    // 외부 className
    className

  )

}