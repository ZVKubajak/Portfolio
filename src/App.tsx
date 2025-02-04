import Header from "./layout/Header";

function App() {
  return (
    <>
      <Header />

      <main className="relative">
        <div className="absolute top-36 left-16 sm:left-44 md:left-60 lg:left-32 xl:left-72 2xl:left-96 -z-10 bg-rose-300 2xl:bg-rose-400 h-72 w-72 rounded-full blur-[120px] 2xl:blur-[150px]" />
        <div className="hidden lg:block absolute top-52 right-32 xl:right-72 2xl:right-96 -z-10 bg-sky-300 2xl:bg-sky-400 h-72 w-72 rounded-full blur-[150px] 2xl:blur-[180px]" />
      </main>
    </>
  );
}

export default App;
