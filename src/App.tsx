import Branch from "./components/Branch"

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
    </div>
  )
}

export default App
