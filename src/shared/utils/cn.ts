import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Tailwind className 조합용 공통 함수
// 예)
// cn(
//   'px-4',
//   isActive && 'bg-blue-500'
// )
//
// 결과:
// 'px-4 bg-blue-500'
export function cn(...inputs: ClassValue[]) {

  return twMerge(
    clsx(inputs)
  )

}