import Header from "./layout/Header";

function App() {
  return (
    <>
      <Header />

      <main className="relative">
        <div className="absolute top-36 left-16 -z-10 bg-rose-200 h-72 w-72 rounded-full blur-3xl" />
      </main>
    </>
  );
}

export default App;
