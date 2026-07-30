import Button from './shared/components/button/Button'


function App() {

  return (
    <div className="flex min-h-screen items-center justify-center gap-4">

      <Button>
        저장
      </Button>


      <Button variant="danger">
        삭제
      </Button>


      <Button size="large">
        큰 버튼
      </Button>

    </div>
  )
}


export default App