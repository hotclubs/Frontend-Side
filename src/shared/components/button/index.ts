/**
 * button 컴포넌트 외부 공개 파일
 *
 * 컴포넌트 내부 구조를 외부에 노출하지 않고
 * 여기에서 필요한 것만 export 합니다.
 *
 * 사용 예:
 *
 * import { BoxButton } from '@/shared/components/button'
 *
 * 이렇게 사용할 수 있음
 */


// 기본 버튼 컴포넌트 export
export { BoxButton } from './BoxButton'


// 타입도 외부에서 사용할 수 있도록 export
// 예:
// 다른 컴포넌트에서 ButtonVariant 타입 사용 가능
export type {
  BoxButtonProps,
  ButtonVariant,
  ButtonHeight,
  ButtonWidth,
} from './button.types'