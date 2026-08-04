import {
  useForm,
  FormProvider,
} from 'react-hook-form'


import {
  Field,
} from '@/shared/components/field'


import {
  BoxButton,
} from '@/shared/components/button'



/**
 * 테스트 Form 데이터
 *
 * 실제 프로젝트에서는
 * domain 타입으로 분리 예정
 */
interface TestForm {

  /**
   * 차량가격
   *
   * MoneyInput은 화면에서는
   * 콤마 표시를 하지만
   * Form 값은 문자열로 관리
   */
  vehiclePrice: string

}



function App() {


  /**
   * React Hook Form 생성
   *
   * FormProvider를 통해
   * 하위 Field 컴포넌트에서
   * useFormContext 사용 가능
   */
  const methods =
    useForm<TestForm>({

      defaultValues: {

        vehiclePrice: '',

      },

    })



  /**
   * 제출 테스트
   */
  const onSubmit = (
    data: TestForm
  ) => {

    console.log(
      'submit:',
      data
    )

  }



  return (

    <main
      className="
        min-h-screen
        bg-gray-50
        p-8
      "
    >

      <section
        className="
          mx-auto
          max-w-xl
          rounded-xl
          bg-white
          p-8
          shadow-sm
        "
      >

        <header
          className="
            mb-8
          "
        >

          <h1
            className="
              text-2xl
              font-bold
              text-gray-900
            "
          >

            차량 할부 계산기

          </h1>


          <p
            className="
              mt-2
              text-sm
              text-gray-500
            "
          >

            차량 가격을 입력해주세요.

          </p>


        </header>



        <FormProvider
          {...methods}
        >

          <form

            onSubmit={
              methods.handleSubmit(
                onSubmit
              )
            }


            className="
              space-y-6
            "

          >


            <Field

              name="vehiclePrice"

              label="차량가격"

              variant="money"

              required

              placeholder="차량가격 입력"

            />



            <div
              className="
                flex
                justify-end
                gap-3
                pt-4
              "
            >

              <BoxButton

                type="button"

                variant="secondary"

              >

                취소

              </BoxButton>



              <BoxButton

                type="submit"

                variant="primary"

              >

                계산하기

              </BoxButton>


            </div>


          </form>


        </FormProvider>


      </section>


    </main>

  )

}


export default App