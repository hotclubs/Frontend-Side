/**
 * Button 스타일 정의
 *
 * Button 컴포넌트는 이 파일의 스타일만 사용합니다.
 *
 * 장점:
 * - 디자인 변경 시 한 곳 수정
 * - 컴포넌트 코드 간결화
 * - 여러 버튼 타입 확장 가능
 */


/**
 * 모든 Button 공통 스타일
 *
 * focus:
 * - 키보드 접근성 표시
 *
 * transition:
 * - 상태 변경 애니메이션
 */
export const BASE_STYLE = 
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',

    'rounded-md',

    'font-medium',

    'transition-colors',

    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',

  ].join(' ')



/**
 * 버튼 종류별 스타일
 */
export const VARIANT_STYLE = {


  /**
   * 기본 주요 버튼
   */
  primary:

    [
      'bg-blue-600',
      'text-white',
      'hover:bg-blue-700',

      'focus:ring-blue-500',

    ].join(' '),



  /**
   * 보조 버튼
   */
  secondary:

    [
      'bg-gray-200',
      'text-gray-900',
      'hover:bg-gray-300',

      'focus:ring-gray-400',

    ].join(' '),



  /**
   * 위험 동작
   *
   * 삭제 등
   */
  danger:

    [
      'bg-red-600',
      'text-white',
      'hover:bg-red-700',

      'focus:ring-red-500',

    ].join(' '),



  /**
   * 테두리 버튼
   */
  outline:

    [
      'border',
      'border-gray-300',

      'bg-white',

      'text-gray-900',

      'hover:bg-gray-50',

      'focus:ring-gray-400',

    ].join(' '),


} as const



/**
 * 높이 스타일
 */
export const HEIGHT_STYLE = {


  sm:
    'h-8 px-3 text-sm',


  md:
    'h-10 px-4 text-sm',


  lg:
    'h-12 px-6 text-base',


} as const



/**
 * 너비 스타일
 */
export const WIDTH_STYLE = {


  auto:
    'w-auto',


  md:
    'w-32',


  lg:
    'w-48',


  full:
    'w-full',


} as const



/**
 * 비활성 상태 스타일
 *
 * disabled일 때:
 * - 클릭 불가
 * - 색상 흐림
 */
export const DISABLED_STYLE =

  [
    'disabled:cursor-not-allowed',

    'disabled:opacity-50',

  ].join(' ')