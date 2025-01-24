import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(pepe-silvia.webp)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Pepe Silvia</h1>
            <p className="mb-5">
              Your preimier conspiracy board app.
            </p>
            <p className="mb-5">
              Have you stumbled on a major company conspiracy? Are you seeing a lot of mail for a co-worker only go to their office and find they don't exist? So you go to Carol in HR only to find out there is no Carol. That in fact, half the employees in the company are made up, that the office is a ghost town?
            </p>
            <p className="mb-5">
              Make your own conspiracy board and share it with the world!
            </p>
            <Link
              className="btn mr-4"
              href={`${process.env.URL}/board`}
            >
              See a demo
            </Link>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
