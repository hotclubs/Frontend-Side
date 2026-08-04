import {
  Controller,
  useFormContext,
} from 'react-hook-form'


import type {
  FieldValues,
} from 'react-hook-form'


import {
  FormField,
} from '@/shared/components/form-field'


import {
  MoneyInput,
} from '@/shared/components/input'


import type {
  FieldProps,
} from '../field.types'



/**
 * MoneyField
 *
 * 금액 입력을 위한 Form Field
 *
 *
 * 역할:
 *
 * 1. React Hook Form Controller 연결
 * 2. Form Error 전달
 * 3. MoneyInput 조합
 *
 *
 * 책임 분리:
 *
 * MoneyField
 *  - Form 상태 관리
 *
 * MoneyInput
 *  - 숫자 포맷 표시
 *  - 입력값 변환
 *
 * BaseInput
 *  - 순수 Input UI
 *
 *
 * 예:
 *
 * 화면:
 * 50,000,000
 *
 * Form Value:
 * "50000000"
 *
 */
export function MoneyField<
  TFieldValues extends FieldValues
>({

  name,

  label,

  required,

  placeholder,

}: FieldProps<TFieldValues>) {



  /**
   * React Hook Form Context
   *
   * Controller를 사용하기 위해
   * control을 가져온다.
   */
  const {
    control,

    formState: {
      errors,
    },

  } =
    useFormContext<TFieldValues>()



  /**
   * 현재 Field Error 조회
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

      <Controller

        name={name}

        control={control}


        /**
         * Controller가 관리하는 값을
         * MoneyInput과 연결한다.
         */
        render={({
          field,
        }) => (


          <MoneyInput

            /**
             * RHF 값
             *
             * MoneyInput은 문자열 기준으로
             * 동작하기 때문에 변환한다.
             */
            value={
              String(
                field.value ?? ''
              )
            }


            /**
             * MoneyInput에서 전달하는
             * 순수 숫자 문자열 저장
             */
            onChange={
              field.onChange
            }


            placeholder={
              placeholder
            }

          />


        )}

      />

    </FormField>

  )

}