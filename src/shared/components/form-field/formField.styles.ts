/**
 * Form Field 공통 스타일
 *
 * Label, HelperText, ErrorMessage 등
 * 입력 관련 공통 UI에서 사용한다.
 */


/**
 * FieldLabel 기본 스타일
 *
 * 이유:
 * - 모든 Label은 동일한 typography 기준
 * - 디자인 변경 시 한 곳에서 수정
 */
export const FIELD_LABEL_STYLE = [
  'text-sm',
  'font-medium',
  'text-gray-900',
].join(' ')