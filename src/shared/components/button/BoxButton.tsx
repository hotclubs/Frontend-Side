import { forwardRef } from 'react'
import { getButtonClass } from './button.utils'
import type { BoxButtonProps, } from './button.types'

/**
 * BoxButton
 *
 * 기본 사각형 버튼 컴포넌트
 *
 * 설계:
 * - 버튼 렌더링 담당
 * - 스타일 조합은 button.utils 담당
 * - 타입은 button.types 담당
 *
 * forwardRef 사용 이유:
 * - 부모 컴포넌트에서 실제 button DOM 접근 가능
 * - focus, scroll, accessibility 처리 가능
 */
export const BoxButton = forwardRef<
  HTMLButtonElement,
  BoxButtonProps
>(

  function BoxButton(
    
    {
      children,
      variant = 'primary',
      height = 'md',
      width = 'md',
      isFull = false,
      loading = false,
      disabled,
      className,
      type = 'button',
      ...props
    },
    ref
  ) {
    return (
      <button
        // 부모에서 전달한 ref를 실제 DOM에 연결
        ref={ref}
        // form 내부 submit 방지
        type={type}
        className={getButtonClass({
          variant,
          height,
          width,
          isFull,
          className,
        })}
        // loading 중에는 클릭 방지
        disabled={disabled || loading}
        {...props}
      >
        {
          loading
            ? 'Loading...'
            : children
        }
      </button>
    )
  }
)