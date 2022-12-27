import Branch from "./components/Branch"
import ShouldRender from "./components/ShouldRender"

function App() {

  return (
    <div>
      APP

      <Branch condition={false}>
        <Branch.If>
          <h1>Hello</h1>
        </Branch.If>
        <Branch.Else>
          <h1>World</h1>
        </Branch.Else>
      </Branch>

      <ShouldRender condition={false}>
        <h1>Hello World</h1>
      </ShouldRender>
    </div>
  )
}

export default App
