function Header() {
    return (
        <header className="p-4 flex justify-between items-center">
            <div className="flex items-center">Left Menu</div>
            <div className="flex items-center flex-col">
                <h1 className="text-2xl font-semibold flex">COACHING</h1>
                <div className="text-sm text-gray-500">by Kimberley</div>
            </div>
            <div className="flex items-center">Right Menu</div>
        </header>
    );
}

function Main() {
    return <main className="bg-gray-100 p-4 flex-1">Main Content</main>;
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
