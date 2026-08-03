import { cn } from '@/shared/utils/cn'

import type {
  FieldMessageProps,
} from './formField.types'


/**
 * HelperText
 *
 * 입력 필드 하단에 표시되는
 * 일반 안내 문구
 *
 * 예:
 * "최대 5천만원까지 입력 가능합니다."
 *
 * Error가 없는 정상 상태에서 사용한다.
 */
export function HelperText({
  message,
  className,
}: FieldMessageProps) {
  if (!message) {
    return null
  }
  return (
    <p
      className={
        cn(
          'text-sm text-gray-500',
          className,
        )
      }
    >
      {message}
    </p>
  )
}