import {
  createContext,
} from 'react'


/**
 * FormField 내부 공유 데이터
 *
 * Label
 * Input
 * Message
 *
 * 모두 이 Context를 통해 연결한다.
 */
export interface FormFieldContextValue {

  /**
   * Input 고유 ID
   */
  id: string


  /**
   * Validation 오류 여부
   */
  error?: string


  /**
   * 필수 여부
   */
  required?: boolean

}


/**
 * 초기값 undefined
 *
 * Provider 밖에서 사용하면
 * 개발자가 바로 알 수 있도록 처리
 */
export const FormFieldContext =
  createContext<FormFieldContextValue | undefined>(
    undefined
  )