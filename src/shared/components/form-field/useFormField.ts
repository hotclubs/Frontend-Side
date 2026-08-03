import {
  useContext,
} from 'react'

import {
  FormFieldContext,
} from './context/FormFieldContext'


/**
 * FormField Context 조회 Hook
 *
 * FormField 내부:
 *  - id
 *  - error
 *  - required
 *
 * 사용 가능
 *
 * 단독 사용:
 *  undefined 반환
 */
export function useFormField() {

  return useContext(FormFieldContext)

}