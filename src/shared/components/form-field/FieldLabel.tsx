import { cn } from '@/shared/utils/cn'


import {
  useFormField,
} from './useFormField'


import {
  FIELD_LABEL_STYLE,
} from './formField.styles'


import type {
  FieldLabelProps,
} from './formField.types'



/**
 * FieldLabel
 *
 * FormField 내부 Label 담당
 *
 * Context에서 id와 required 정보를 가져온다.
 */
export function FieldLabel({

  label,

  className,

}: FieldLabelProps) {


  const {
    id,
    required,
  } = useFormField()



  return (

    <label

      htmlFor={id}

      className={
        cn(
          FIELD_LABEL_STYLE,
          className
        )
      }

    >

      {label}


      {
        required && (

          <span
            className="ml-1 text-red-500"
            aria-hidden="true"
          >
            *
          </span>

        )
      }


    </label>

  )

}