import React from "react";
import Container from "../Container";
import ScrollStack, { ScrollStackItem } from "../ui/ScrollStack";
import { Inter } from "next/font/google";

const inter = Inter();

const Expertise = () => {
  return (
    <>
      <ScrollStack className={`${inter.className}`}>

        {/* Card 1 — Social Strategy */}
        <ScrollStackItem itemClassName="bg-white">
          <div className="flex flex-col h-full justify-between gap-6 md:gap-0">
            <div>
              <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0">
                <div>
                  <span className="text-base md:text-[25px] font-semibold p-2 rounded-[10px] bg-black/25 uppercase">
                    Expertise
                  </span>
                  <h2 className="text-4xl sm:text-5xl md:text-[88px] font-bold mt-4 md:mt-5">
                    Social Strategy
                  </h2>
                </div>
                <p className="text-4xl sm:text-5xl md:text-[70px] font-bold text-[#EAE4D8]">01</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 md:gap-0">
              <div className="md:mb-0">
                <p className="text-xl md:text-[30px] font-bold max-w-md">
                  Slimme strategie. Sterke start.
                </p>
                <p className="text-base md:text-xl max-w-md mt-2">
                  We duiken diep in jouw merk, doelgroep en doelen. En vertalen
                  data naar een duidelijk plan met formats die écht impact
                  maken. Zo weet je precies waarom het werkt.
                </p>
              </div>
              <div className="w-[180px] sm:w-[220px] md:w-[300px] rotate-[7deg] rounded-4xl border-5 border-amber-500 mx-auto md:mx-0 flex-shrink-0">
                <video
                  src="https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-4xl"
                ></video>
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* Card 2 — Content Creation */}
        <ScrollStackItem itemClassName="bg-[#FCB8FA] min-h-[600px] md:h-[800px]">
          <div className="flex flex-col h-full justify-between gap-6 md:gap-0">
            <div>
              <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0">
                <div>
                  <span className="text-base md:text-[25px] font-semibold p-2 rounded-[10px] bg-black/25 uppercase">
                    Expertise
                  </span>
                  <h2 className="text-4xl sm:text-5xl md:text-[88px] font-bold mt-4 md:mt-5">
                    Content Creation
                  </h2>
                </div>
                <p className="text-4xl sm:text-5xl md:text-[70px] font-bold text-[#EAE4D8]">02</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 md:gap-0">
              <div className="md:mb-0">
                <p className="text-xl md:text-[30px] font-bold max-w-md">
                  Content die opvalt en raakt.
                </p>
                <p className="text-base md:text-xl max-w-md mt-2">
                  We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.
                </p>
              </div>
              <div className="w-[180px] sm:w-[220px] md:w-[300px] rotate-[7deg] rounded-4xl border-5 border-amber-500 mx-auto md:mx-0 flex-shrink-0">
                <video
                  src="https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-4xl"
                ></video>
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* Card 3 — Activation */}
        <ScrollStackItem itemClassName="bg-[#33C791] min-h-[600px] md:h-[800px]">
          <div className="flex flex-col h-full justify-between gap-6 md:gap-0">
            <div>
              <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0">
                <div>
                  <span className="text-base md:text-[25px] font-semibold p-2 rounded-[10px] bg-black/25 uppercase">
                    Expertise
                  </span>
                  <h2 className="text-4xl sm:text-5xl md:text-[88px] font-bold mt-4 md:mt-5">
                    Activation
                  </h2>
                </div>
                <p className="text-4xl sm:text-5xl md:text-[70px] font-bold text-[#EAE4D8]">03</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 md:gap-0">
              <div className="md:mb-0">
                <p className="text-xl md:text-[30px] font-bold max-w-md">
                  Zichtbaar waar en wanneer het telt.
                </p>
                <p className="text-base md:text-xl max-w-md mt-2">
                  De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.
                </p>
              </div>
              <div className="w-[180px] sm:w-[220px] md:w-[300px] rotate-[7deg] rounded-4xl border-5 border-amber-500 mx-auto md:mx-0 flex-shrink-0">
                <video
                  src="https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-4xl"
                ></video>
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* Card 4 — Data */}
        <ScrollStackItem itemClassName="bg-[#0D8DFF] min-h-[600px] md:h-[800px]">
          <div className="flex flex-col h-full justify-between gap-6 md:gap-0">
            <div>
              <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0">
                <div>
                  <span className="text-base md:text-[25px] font-semibold p-2 rounded-[10px] bg-black/25 uppercase">
                    Expertise
                  </span>
                  <h2 className="text-4xl sm:text-5xl md:text-[88px] font-bold mt-4 md:mt-5">
                    Data
                  </h2>
                </div>
                <p className="text-4xl sm:text-5xl md:text-[70px] font-bold text-[#EAE4D8]">04</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 md:gap-0">
              <div className="md:mb-0">
                <p className="text-xl md:text-[30px] font-bold max-w-md">
                  Inzichten die impact maken.
                </p>
                <p className="text-base md:text-xl max-w-md mt-2">
                  We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.
                </p>
              </div>
              <div className="w-[180px] sm:w-[220px] md:w-[300px] rotate-[7deg] rounded-4xl border-5 border-amber-500 mx-auto md:mx-0 flex-shrink-0">
                <video
                  src="https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-4xl"
                ></video>
              </div>
            </div>
          </div>
        </ScrollStackItem>

      </ScrollStack>
    </>
  );
};

export default Expertise;
