import { BoxButton } from '@/shared/components'

function App() {

  return (

    <div>

      <BoxButton loading>
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

      <button>

        <span className="invisible">
          저장
        </span>


        <span className="absolute">
          ⟳
        </span>

      </button>


    </div>
    

  )

}

export default App