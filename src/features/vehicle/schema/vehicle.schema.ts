import {
  object,
  string,
  pipe,
  minLength,
  type InferOutput,
} from 'valibot'


/**
 * 차량 입력 Validation Schema
 *
 * 화면 입력값 검증 담당
 *
 * UI 컴포넌트와 Validation 규칙을 분리한다.
 */
export const vehicleSchema = object({

  /**
   * Input 값은 HTML 기준 string으로 들어온다.
   *
   * 숫자라도 변환 전에는 문자열이다.
   */
  vehiclePrice: pipe(
    string(),
    minLength(
      1,
      '차량가격은 필수입니다.'
    )
  ),
})


/**
 * Schema 기반 Type 생성
 */
export type VehicleFormValues =
  InferOutput<
    typeof vehicleSchema
  >