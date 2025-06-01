function Header() {
    return (
        <header className="p-4 flex justify-between items-center">
            <div className="flex items-center">Left Menu</div>
            <div className="flex items-center flex-col">
                <h1 className="text-2xl font-semibold flex font-condensed">
                    COACHING
                </h1>
                <div className="text-sm font-cursive">by Kimberley</div>
            </div>
            <div className="flex items-center">Right Menu</div>
        </header>
    );
}

// ----- Features Section -----

function Feature({ feature }: { feature: string }) {
    return <div className="flex flex-col gap-2">{feature}</div>;
}

function FeatureList({ features }: { features: string[] }) {
    return (
        <div className="flex flex-col gap-2">
            {features.map((feature) => (
                <Feature key={feature} feature={feature} />
            ))}
        </div>
    );
}

function FeaturesSection() {
    const featureText =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's bled it to make a type.";
    const features = [featureText, featureText, featureText];

    return (
        <div className="p-20 flex items-center justify-center bg-bg">
            <div className="flex flex-col gap-8 items-center w-1/2">
                <h2 className="font-semibold font-cursive">
                    Imagine For Yourself
                </h2>
                {/* Features */}
                <div className="flex gap-4">
                    {/* Feature Left */}
                    <FeatureList features={features} />
                    {/* Feature Right */}
                    <FeatureList features={features} />
                </div>
            </div>
        </div>
    );
}

// ----- Services Section -----

function Service({ service }: { service: Service }) {
    return (
        <div className="flex flex-col gap-6 w-1/2 bg-accent-bg text-accent-fg p-8">
            <div className="flex flex-col gap-2">
                <h3 className="font-semibold font-cursive">{service.title}</h3>
                <p className="font-condensed uppercase">
                    {service.description}
                </p>
            </div>
            <div className="flex flex-col gap-2 bg-white text-accent-bg p-2">
                Get Started
            </div>
        </div>
    );
}

type Service = {
    title: string;
    description: string;
};

function ServiceList({ services }: { services: Service[] }) {
    return (
        <div className="flex gap-8 items-center justify-center w-1/2">
            {services.map((service) => (
                <Service key={service.title} service={service} />
            ))}
        </div>
    );
}

function ServicesSection() {
    const services = [
        {
            title: "Deep Dive",
            description: "Extensive",
        },
        {
            title: "Ongoing",
            description: "Coaching",
        },
    ];

    return (
        <div className="p-20 bg-bg-white flex flex-col gap-8 items-center justify-center">
            <h2 className="font-semibold font-condensed text-lg uppercase">
                Let's Work Together
            </h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
            </p>
            <ServiceList services={services} />
        </div>
    );
}

// ----- Main Section -----

function Jumbotron() {
    return (
        <div className="bg-bg p-4 flex justify-end flex-1 h-48">
            <h1 className="font-semibold flex items-center font-condensed">
                <span className="text-3xl font-condensed font-medium">
                    WORK WITH
                </span>
                &nbsp; &nbsp;
                <span className="text-4xl font-extralight font-cursive">
                    Me
                </span>
            </h1>
        </div>
    );
}

function Pitch() {
    return (
        <div className="p-4 flex-1 flex justify-end bg-bg-white">
            {/* Pitch Content */}
            <div className="flex flex-col gap-2 w-1/3 p-3">
                <h2 className="font-semibold font-cursive">
                    Hey Boss, are you ready to
                </h2>
                <p className="font-condensed uppercase">
                    Take your business to the next level?
                </p>
                <div className="flex flex-col gap-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries.
                </div>
            </div>
            {/* Pitch Content */}
        </div>
    );
}

function Main() {
    return (
        <main className="flex-1">
            <Jumbotron />
            <Pitch />
            <FeaturesSection />
            <ServicesSection />
        </main>
    );
}

// ----- Footer Section -----

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
