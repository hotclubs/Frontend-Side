import {  useId, } from 'react'
import {  FormFieldContext, } from './context/FormFieldContext'
import {  FieldLabel, } from './FieldLabel'
import {  HelperText, } from './HelperText'
import {  ErrorMessage, } from './ErrorMessage'
import type {  FormFieldProps, } from './formField.types'

/**
 * FormField
 *
 * 입력 영역의 공통 Wrapper
 *
 * 책임:
 * - Field id 생성
 * - Label/Input 연결 정보 제공
 * - Error 상태 공유
 */
export function FormField({
  label,
  required = false,
  helperText,
  error,
  children,
  className,
}: FormFieldProps) {

  /**
   * React가 생성하는 고유 ID
   *
   * input id
   * label htmlFor
   * aria-describedby
   *
   * 연결에 사용
   */
  const id = useId()

  return (
    <FormFieldContext.Provider
      value={{
        id,
        error,
        required,
      }}
    >
      <div className={className}>
        <FieldLabel
          label={label}
          required={required}
        />
        {children}
        {
          error ? (
            <ErrorMessage
              message={error}
            />
          ) : (
            <HelperText
              message={helperText}
            />
          )
        }
      </div>
    </FormFieldContext.Provider>
  )

}