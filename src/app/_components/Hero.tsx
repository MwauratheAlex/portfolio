"use client";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import Parallax from "./animations/Parallax";
import { Button } from "./ui/button";
import Container from "./ui/container";
import Wrapper from "./animations/Wrapper";

const Hero = () => {
  const stacks = [
    { name: "Front-End" },
    { name: "UI/UX" },
    { name: "Back-End" },
  ];

  return (
    <Parallax>
      <div className="mt-24 grow align-middle">
        <Container>
          <div
            className={`
            mx-auto
            grid w-max 
            max-w-full place-items-center justify-center
            gap-3 rounded-3xl bg-black bg-opacity-90 px-6 py-8 text-center md:gap-6 lg:px-10`}
          >
            <h1 className="text-2xl text-slate-400  lg:text-5xl">
              Mwaura Mbugua
            </h1>
            <h2
              className="text-3xl font-bold lg:text-6xl"
              style={{
                background:
                  "linear-gradient(174deg, rgba(155,188,195,1) 22%, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                backgroundClip: "text",
              }}
            >
              Building beautiful stuff <br /> for the web
            </h2>
            <Wrapper>
              <div className="flex">
                {stacks.map((stack, idx) => (
                  <Stack key={idx} name={stack.name} />
                ))}
              </div>
            </Wrapper>
            <Button
              variant="outline"
              size="lg"
              className="mt-2 rounded-md border-red-500 py-6 text-xl font-medium"
            >{`Let's talk`}</Button>
          </div>
        </Container>
      </div>
    </Parallax>
  );
};

export const Stack = (props: { name: string; children?: React.ReactNode }) => {
  return (
    <div className="m-3 flex flex-col place-items-center gap-1 opacity-85 md:gap-2 lg:m-4">
      {props.name === "UI/UX" && <DiZend size="2rem" color="#cf5dc1" />}
      {props.name === "Front-End" && (
        <DiReact size="2rem" color="rgb(7, 181, 237)" />
      )}
      {props.name === "Back-End" && (
        <DiFirebase size="2rem" color="rgb(250, 172, 2)" />
      )}
      <p
        className={`text-lg font-bold lg:text-2xl
        ${props.name === "UI/UX" && "text-purple-400"}
        ${props.name === "Front-End" && "text-blue-400"}
        ${props.name === "Back-End" && "text-yellow-200"}`}
      >
        {props.name}
      </p>
      {props.children}
    </div>
  );
};

export default Hero;
