import { Button } from "@mantine/core";

const Home = () => {
  return (
    <div className="flex flex-col justify-center bg-white px-3 py-16 tablet:px-10 tablet:py-60">
      <h1 className="text-center text-6xl font-bold">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-violet-700 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Boilerplate Vite React
        </span>
      </h1>
      <p className="text-muted-foreground mx-auto mt-5 max-w-screen-lg text-center text-xl">
        Jumpstart your enterprise project with our feature-packed,
        high-performance React.js boilerplate! Experience rapid UI development,
        and an extensive suite of tools for a smooth and enjoyable development
        process.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 tablet:flex-row">
        <a
          href="https://github.com/LiamPham98/boilerplate-nextjs"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button size="lg" color="#000000">
            Get Started
          </Button>
        </a>
        <a
          href="https://github.com/LiamPham98/boilerplate-nextjs"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button variant="outline" size="lg" color="#000000">
            Star on GitHub (~0,01k)
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Home;
