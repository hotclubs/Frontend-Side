import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'


/**
 * Tailwind class 조합 유틸
 *
 * clsx:
 * - 조건부 class 처리
 *
 * 예:
 * cn(
 *   'text-red-500',
 *   isActive && 'font-bold'
 * )
 *
 *
 * tailwind-merge:
 * - Tailwind 충돌 제거
 *
 * 예:
 * text-red-500 + text-blue-500
 *
 * 마지막 스타일만 적용
 */
export function cn(
  ...inputs: Parameters<typeof clsx>
) {

  return twMerge(
    clsx(inputs)
  )

}