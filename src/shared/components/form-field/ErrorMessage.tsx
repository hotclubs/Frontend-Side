import { cn } from '@/shared/utils/cn'
import type {
  FieldMessageProps,
} from './formField.types'

/**
 * ErrorMessage
 *
 * Validation 실패 메시지 담당
 *
 * HelperText와 분리하는 이유:
 *
 * - 색상
 * - 접근성
 * - 표시 정책
 *
 이 다르기 때문이다.
 */
export function ErrorMessage({
  message,
  className,
}: FieldMessageProps) {
  if (!message) {
    return null
  }
  return (
    <p
      role="alert"
      aria-live="polite"
      className={
        cn(
          'text-sm text-red-500',
          className,
        )
      }
    >
      {message}
    </p>
  )
}