import type {
  FieldValues,
  Path,
} from 'react-hook-form'


/**
 * Field 입력 방식
 *
 * 화면에서 사용하는 입력 형태를 정의한다.
 *
 * Input 자체가 아니라
 * Form 연결 방식 기준의 타입이다.
 */
export type FieldVariant =
  | 'text'
  | 'money'
  | 'number'



/**
 * Field 공통 Props
 *
 * Field는 Form과 Input 사이의
 * 연결 역할을 담당한다.
 */
export interface FieldProps<
  TFieldValues extends FieldValues
> {


  /**
   * React Hook Form Field 이름
   *
   * 예:
   *
   * vehiclePrice
   */
  name: Path<TFieldValues>



  /**
   * 사용자에게 보여줄 Label
   */
  label: string



  /**
   * 필수 입력 표시
   */
  required?: boolean



  /**
   * 입력 방식
   */
  variant?: FieldVariant



  /**
   * Input placeholder
   */
  placeholder?: string

}