function Header() {
    return (
        <header className="p-4 flex justify-between items-center">
            <div className="flex items-center">Left Menu</div>
            <div className="flex items-center flex-col">
                <h1 className="text-2xl font-semibold flex font-condensed">
                    COACHING
                </h1>
                <div className="text-sm text-gray-9 font-cursive">
                    by Kimberley
                </div>
            </div>
            <div className="flex items-center">Right Menu</div>
        </header>
    );
}

// ----- Main Content -----

function Jumbotron() {
    return (
        <div className="bg-gray-4 p-4 flex-1">
            <h1 className="font-semibold flex justify-end items-center font-condensed">
                <span className="text-2xl text-gray-12 font-condensed">
                    WORK WITH
                </span>
                &nbsp; &nbsp;
                <span className="text-2xl text-gray-12 font-cursive">Me</span>
            </h1>
        </div>
    );
}

function Main() {
    return (
        <main className="bg-gray-4 p-4 flex-1">
            <Jumbotron />
        </main>
    );
}

function Footer() {
    return <footer className="p-4">Footer</footer>;
}

function App() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
