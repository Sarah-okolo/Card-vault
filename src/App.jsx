import Sidebar from "./Sidebar"
import Card_form from "./Card_form"

function App() {
  return (
    <>
      <div className="min-h-screen w-screen larger:flex">
        <Sidebar />
        <main className="px-5 py-20 larger:flex-grow larger:grid larger:place-items-center">
          <Card_form />
        </main>
      </div>
    </>
  )
}

export default App