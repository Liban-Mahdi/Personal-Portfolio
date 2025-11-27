import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import ViewFooter from "./ViewFooter";
import avatarSvg from "../assets/svgs/avatar.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AboutMe = () => {
    const avatarRef = useRef();
    const frameRef = useRef();
    const textRef = useRef();
    const startRef = useRef();

    const isTallerThan700 = useMediaQuery({ minHeight: 700 });
    const isTallerThan600 = useMediaQuery({ minHeight: 700 });

    useGSAP(() => {
        gsap.from(avatarRef.current, {
            opacity: 0,
            scale: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
        });

        gsap.to(frameRef.current, {
            rotation: 360,
            repeat: -1,
            duration: 2,
            ease: "linear",
            transformOrigin: "50% 50%",
        });

        gsap.from(textRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.5,
            stagger: 0.3,
            ease: "power2.out",
        });

        gsap.from(startRef.current, {
            opacity: 0.2,
            scale: 1.5,
            duration: 0.2,
            repeat: -1,
            yoyo: true,
            ease: "power.out",
            delay: 0.8,
        });
    });

    return (
        <div className="flex flex-col h-screen w-full bg-orange-200">
            <div
                className={`flex flex-col flex-grow justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg shadow-lg h-full pb-20 sm:pb-36 ${
                    isTallerThan600
                        ? "md:pb-48 lg:pb-64"
                        : "md:pb-[30vh] lg:pb-[30vh]"
                }`}
            >
                {/* Rotating frame + avatar */}
                <div className="relative mb-4 sm:mb-8 flex justify-center items-center">
                    {/* Rotating circular frame */}
                    <div
                        ref={frameRef}
                        className={`absolute w-24 h-24 sm:w-32 sm:h-32 ${
                            isTallerThan700
                                ? "md:w-[16vw] md:h-[16vw]"
                                : "md:w-[23vh] md:h-[23vh]"
                        } rounded-full border-t-4 border-orange-600 flex justify-center items-center`}
                    ></div>

                    {/* Avatar image */}
                    <img
                        src={avatarSvg}
                        alt="avatar"
                        className={`${
                            isTallerThan700 ? "md:w-[14vw]" : "md:w-[20vh]"
                        } w-16 sm:w-24 rounded-full shadow-lg`}
                        ref={avatarRef}
                    />
                </div>

                {/* About Me text */}
                <div
                    className="text-center font-serif font-semibold text-gray-700 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32"
                    ref={textRef}
                >
                    <p className="text-lg sm:text-xl md:text-[2vw] mb-2 sm:mb-4 md:mb-6 leading-relaxed">
                        Hi! My name is{" "}
                        <span className="text-orange-600 animate-pulse">
                            Liban
                        </span>
                        , and I’m a third-year Computer Science student based in
                        Ottawa.
                    </p>

                    <p className="text-base sm:text-lg md:text-[1.5vw] mb-2 sm:mb-4 md:mb-6 leading-relaxed">
                        I’m currently completing my{" "}
                        <span className="text-blue-600">
                            Bachelor of Computer Science
                        </span>{" "}
                        at the University of Ottawa while building projects in
                        web development, data, and backend systems.
                    </p>

                    <p className="text-base sm:text-lg md:text-[1.5vw] mb-2 sm:mb-4 md:mb-6 leading-relaxed">
                        I work with{" "}
                        <span className="text-blue-600">Java</span>,{" "}
                        <span className="text-blue-600">React</span>,{" "}
                        <span className="text-blue-600">PostgreSQL/MySQL</span>,
                        and <span className="text-blue-600">APIs</span>, and
                        enjoy building full-stack systems and exploring
                        different areas of software development as I grow.
                    </p>

                    <p className="text-base sm:text-lg md:text-[1.5vw] mb-2 sm:mb-4 md:mb-6 leading-relaxed">
                        I’m always learning new tools, experimenting with ideas,
                        and improving my problem-solving skills through real
                        projects.
                    </p>

                    <p className="text-lg sm:text-xl md:text-[2vw] pt-3">
                        <span
                            className="text-slate-600 sm:text-2xl md:text-[2.8vw] font-rodin font-bold animate-pulse"
                            ref={startRef}
                        >
                            Press &quot;Start&quot; to view my Resume.
                        </span>
                    </p>
                </div>
            </div>

            <div className="mt-auto">
                <ViewFooter />
            </div>
        </div>
    );
};

export default AboutMe;
