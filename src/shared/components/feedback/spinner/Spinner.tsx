import { cn } from '@/shared/utils/cn'

import {
  BASE_STYLE,
  SIZE_STYLE,
  COLOR_STYLE,
} from './spinner.styles'

import type {
  SpinnerProps,
} from './spinner.types'


/**
 * Spinner
 *
 * 로딩 상태를 표시하는 공통 UI 컴포넌트
 *
 * 설계 원칙:
 * - 로딩 상태 판단은 부모가 담당
 * - Spinner는 화면 표시만 담당
 * - Button, Table, Page 등 여러 곳에서 재사용 가능
 */
export function Spinner({

  // Spinner 크기
  // 기본값: md
  size = 'md',


  // Spinner 색상
  // 기본값: primary
  color = 'primary',


  // 외부 추가 스타일
  className,


}: SpinnerProps) {


  return (

    <span

      /**
       * 스타일 조합
       *
       * BASE_STYLE
       *  → 공통 회전 스타일
       *
       * SIZE_STYLE
       *  → 크기
       *
       * COLOR_STYLE
       *  → 색상
       *
       * className
       *  → 사용하는 곳에서 확장 가능
       */
      className={cn(

        BASE_STYLE,

        SIZE_STYLE[size],

        COLOR_STYLE[color],

        className

      )}


      /**
       * 접근성 처리
       *
       * Spinner는 시각적으로만 보이고
       * 스크린리더에게는 의미가 없습니다.
       *
       * aria-hidden=true
       *  → 보조기기는 무시
       */
      aria-hidden="true"

    />

  )

}