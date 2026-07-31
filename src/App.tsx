import { BoxButton } from '@/shared/components'

function App() {

  return (

    <div>

      <BoxButton>
        저장
      </BoxButton>


      <BoxButton variant="danger">
        삭제
      </BoxButton>


      <BoxButton
        variant="secondary"
        height="lg"
      >
        취소
      </BoxButton>


    </div>

  )

}

export default App