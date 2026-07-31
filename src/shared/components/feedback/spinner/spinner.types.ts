/**
 * Spinner 크기 타입
 *
 * 디자인 시스템에서 허용하는 크기만 사용하도록 제한합니다.
 *
 * 숫자를 직접 받지 않는 이유:
 * - 13px
 * - 15px
 * - 17px
 *
 * 처럼 디자인이 무분별하게 늘어나는 것을 방지하기 위함입니다.
 */
export type SpinnerSize =
  | 'sm'
  | 'md'
  | 'lg'


/**
 * Spinner 색상 타입
 *
 * 실제 스타일은 spinner.styles.ts에서 관리합니다.
 */
export type SpinnerColor =
  | 'primary'
  | 'white'
  | 'gray'


/**
 * Spinner Props
 */
export interface SpinnerProps {

  /**
   * Spinner 크기
   *
   * 기본값: md
   */
  size?: SpinnerSize


  /**
   * Spinner 색상
   *
   * 기본값: primary
   */
  color?: SpinnerColor


  /**
   * 외부에서 추가 Tailwind 클래스 전달
   *
   * 공통 컴포넌트라도 확장 가능성을 열어둠
   */
  className?: string

}