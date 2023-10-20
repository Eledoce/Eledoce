function App() {
  return (
    <div className="bg-slate-900  h-screen w-screen flex flex-col text-white">
      <header className="bg-teal-300 p-2">
        <h1 className="text-4xl bg-gradient-to-br from-teal-400 to-purple-900 font-bold text-transparent bg-clip-text">
          Edoce
        </h1>
      </header>
      <main className="grow flex md:flex-row flex-col gap-2 p-2">
        <section className="text-white w-full  border rounded-md">
          <p>yo, o algo asi</p>
        </section>
        <section className="w-full  md:w-3/4 rounded-md border">algo</section>
      </main>
    </div>
  )
}

export default App
