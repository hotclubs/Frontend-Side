import { forwardRef } from 'react'

import { Spinner } from '@/shared/components/feedback/spinner'

import { getButtonClass } from './button.utils'

import type { BoxButtonProps } from './button.types'

/**
 * BoxButton
 *
 * 프로젝트에서 사용하는 기본 버튼 컴포넌트
 *
 * 설계 원칙
 * --------------------------------------------------
 * 1. UI 렌더링만 담당한다.
 * 2. 스타일은 button.styles.ts에서 관리한다.
 * 3. 스타일 조합은 button.utils.ts에서 담당한다.
 * 4. 로딩 UI는 Spinner 컴포넌트를 재사용한다.
 * 5. DOM 접근이 가능하도록 forwardRef를 지원한다.
 */
export const BoxButton = forwardRef<
  HTMLButtonElement,
  BoxButtonProps
>(
  (
    {
      children,
      variant = 'primary',
      height = 'md',
      width = 'auto',
      loading = false,
      disabled = false,
      className,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    /**
     * loading 중에는 사용자가 버튼을 다시 클릭하면
     * 중복 요청이 발생할 수 있다.
     *
     * 따라서 loading 상태도 disabled처럼 동작시킨다.
     */
    const isDisabled = disabled || loading
    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={getButtonClass({
          variant,
          height,
          width,
          disabled: isDisabled,
          className,
        })}
        {...props}
      >
        {
          loading && (
            <Spinner
              size="sm"
            />
          )
        }
        <span>
          {children}
        </span>
      </button>
    )
  },
)
BoxButton.displayName = 'BoxButton'