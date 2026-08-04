import type {
  FieldValues,
} from 'react-hook-form'


import {
  TextField,
  MoneyField,
} from './adapters'


import type {
  FieldProps,
} from './field.types'



/**
 * Field
 *
 * Form 입력 컴포넌트의 진입점
 *
 *
 * 역할:
 *
 * - variant를 기준으로
 *   실제 Field Adapter 선택
 *
 *
 * 책임:
 *
 * Field
 *  ↓
 * Adapter 선택
 *
 *
 * 실제 동작은:
 *
 * TextField
 * MoneyField
 *
 * 에서 담당한다.
 *
 *
 * 예:
 *
 * variant="money"
 *
 * Field
 *  ↓
 * MoneyField
 *  ↓
 * Controller
 *  ↓
 * MoneyInput
 *
 */
export function Field<
  TFieldValues extends FieldValues
>(
  props: FieldProps<TFieldValues>
) {


  const {
    variant = 'text',
  } = props



  /**
   * 입력 타입별 Field 선택
   *
   * 여기서는 연결 역할만 담당한다.
   */
  switch (variant) {


    /**
     * 금액 입력
     *
     * Controller 필요
     */
    case 'money':

      return (
        <MoneyField
          {...props}
        />
      )



    /**
     * 기본 문자 입력
     *
     * register 사용
     */
    case 'text':

    default:

      return (
        <TextField
          {...props}
        />
      )

  }

}