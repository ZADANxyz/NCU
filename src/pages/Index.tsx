
// Update this page to render the amazing new Header

import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto mt-20 px-5">
        <section className="mt-12 text-center">
          <h1 className="text-5xl font-bold text-[#046BD2] mb-4">
            Welcome to NCU
          </h1>
          <p className="text-xl text-gold mb-2">
            Empowering the next generation of leaders.
          </p>
          <p className="text-lg text-muted-foreground mt-6">
            This is a demo site header. Start building your amazing brand experience here!
          </p>
        </section>
      </main>
    </div>
  );
};

export default Index;
