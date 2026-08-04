import {
  useFormContext,
} from 'react-hook-form'


import type {
  FieldValues,
} from 'react-hook-form'


import {
  FormField,
} from '@/shared/components/form-field'


import {
  BaseInput,
} from '@/shared/components/input'


import type {
  FieldProps,
} from '../field.types'



/**
 * TextField
 *
 * 일반 문자열 입력용 Field
 *
 *
 * 역할:
 *
 * Field와 BaseInput 사이에서
 * React Hook Form 연결을 담당한다.
 *
 *
 * 구조:
 *
 * TextField
 *      |
 *      ↓
 * FormField
 *      |
 *      ↓
 * BaseInput
 *
 *
 * 책임:
 *
 * - register 연결
 * - error 전달
 * - label/input 조합
 *
 *
 * 하지 않는 것:
 *
 * - 문자열 validation
 * - 입력 포맷 변경
 *
 * Validation은 Valibot 담당
 *
 */
export function TextField<
  TFieldValues extends FieldValues
>({

  name,

  label,

  required,

  placeholder,

}: FieldProps<TFieldValues>) {


  /**
   * FormProvider에서 제공하는
   * React Hook Form Context 사용
   *
   * 일반 Input은 값 변환이 필요 없으므로
   * register 방식 사용
   */
  const {
    register,

    formState: {
      errors,
    },

  } =
    useFormContext<TFieldValues>()



  /**
   * 현재 Field 에러 조회
   */
  const error =
    errors[name]



  return (

    <FormField

      label={label}

      required={required}

      error={
        error?.message as string
      }

    >

      <BaseInput

        placeholder={
          placeholder
        }


        {
          ...register(name)
        }

      />

    </FormField>

  )

}