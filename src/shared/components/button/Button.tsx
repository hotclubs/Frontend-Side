import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'

// 버튼 종류
// primary : 기본 버튼
// danger  : 삭제 등 위험 작업 버튼
type ButtonVariant = 
  | 'primary'
  | 'danger'


// 버튼 크기
type ButtonSize =
  | 'small'
  | 'medium'
  | 'large'


// Button 컴포넌트가 받을 Props 정의
interface ButtonProps 
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  // 버튼 내부 내용
  children: ReactNode
  // 버튼 색상 타입
  variant?: ButtonVariant
  // 버튼 크기
  size?: ButtonSize
}


// 공통 Button 컴포넌트
function Button({
  children,
  variant = 'primary', // 기본값
  size = 'medium',
  className,
  ...props       // onClick, disabled 등 기본 button 속성
}: ButtonProps) {


  return (
   <button
      className={cn(
        // 공통 스타일
        'rounded-lg bg-blue-600 px-4 py-2 text-white',
        // 외부에서 추가 스타일 전달 가능
        className
      )}
      {...props}
    >
      {children}
    </button>

  )

}

export default Button