/**
 * Spinner 스타일 관리
 *
 * Spinner 컴포넌트는 화면 표시만 담당하고,
 * 실제 Tailwind 클래스는 이 파일에서 관리합니다.
 *
 * 장점:
 * - 디자인 변경 시 한 곳만 수정
 * - 컴포넌트 코드가 단순해짐
 */


/**
 * Spinner 공통 스타일
 *
 * rounded-full
 *  → 원 형태 생성
 *
 * border-2
 *  → 테두리 두께
 *
 * border-current
 *  → 현재 text 색상을 border 색상으로 사용
 *
 * animate-spin
 *  → Tailwind 기본 회전 애니메이션
 */
export const BASE_STYLE =
  'inline-block rounded-full border-2 border-solid border-current animate-spin'



/**
 * Spinner 크기
 *
 * Tailwind 기준:
 *
 * sm : 16px
 * md : 24px
 * lg : 32px
 */
export const SIZE_STYLE = {

  sm: 'h-4 w-4',

  md: 'h-6 w-6',

  lg: 'h-8 w-8',

} as const



/**
 * Spinner 색상
 *
 * text 색상을 변경하면
 * border-current가 같이 적용됨
 */
export const COLOR_STYLE = {

  primary:
    'text-blue-600',


  white:
    'text-white',


  gray:
    'text-gray-400',

} as const

export const VARIANT_STYLE = {

 primary:
 'bg-blue-600 text-white hover:bg-blue-700',


 secondary:
 'bg-gray-200 text-gray-900 hover:bg-gray-300',


 danger:
 'bg-red-600 text-white hover:bg-red-700',

}