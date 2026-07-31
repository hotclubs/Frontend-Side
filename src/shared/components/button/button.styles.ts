/**
 * BoxButton에서 사용하는 Tailwind 스타일를 관리합니다.(버튼이 어떻해 생겼는지만 관리)
 *
 * 컴포넌트(BoxButton.tsx)에서는
 * "어떤 스타일을 사용할지"만 결정하고,
 * 실제 Tailwind 클래스는 이 파일에서 관리합니다.
 *
 * 이렇게 하면 디자인 변경 시 이 파일만 수정하면 됩니다.
 */

// 버튼 공통 스타일
export const BASE_STYLE =
  'inline-flex items-center justify-center rounded-lg font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50'

// 버튼 종류
export const VARIANT_STYLE = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700',

  secondary:
    'bg-gray-200 text-gray-900 hover:bg-gray-300',

  danger:
    'bg-red-600 text-white hover:bg-red-700',
} as const

// 버튼 높이
export const HEIGHT_STYLE = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
} as const

// 버튼 너비
export const WIDTH_STYLE = {
  sm: 'w-24',
  md: 'w-32',
  lg: 'w-40',
} as const