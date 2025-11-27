import ViewFooter from "./ViewFooter";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const WorkExperienceView = () => {
    const timelineRef = useRef();
    const lineRef = useRef();
    const experienceRefs = useRef([]);
    const [hoveredItem, setHoveredItem] = useState(null);

    const workExperiences = [
        {
            id: 1,
            year: "2024 – Present",
            company: "10Fourteen",
            position: "Barback",
            description:
                "Supported bartenders during busy shifts by restocking, running drinks, cleaning stations, and keeping the bar operating smoothly in a fast-paced environment.",
            color: "bg-green-600",
        },
        {
            id: 2,
            year: "2025 – Present",
            company: "SmashTournamentLocator",
            position: "Creator",
            description:
                "Building a web app to help players find local Smash Bros. tournaments using APIs, maps, and modern JavaScript tools. Responsible for feature planning, data handling, and UI behavior.",
            color: "bg-yellow-600",
        },
        {
            id: 3,
            year: "2022 – 2025",
            company: "Local Competitive Community",
            position: "Tournament Organizer",
            description:
                "Organized local Smash Bros. events, managed brackets and schedules, and coordinated with players to keep tournaments running smoothly and on time.",
            color: "bg-blue-600",
        },
        {
             id: 4,
            year: "2024",
            company: "Ottawa Community Housing",
            position: "Volunteer",
            description:
                "Helped maintain OCH properties by cleaning common areas, organizing supplies, and supporting light maintenance tasks. Worked with staff to keep buildings safe and presentable for tenants.",
             color: "bg-purple-600",
        },

    ];

    useGSAP(() => {
        // Initialize elements as hidden
        gsap.set(experienceRefs.current, { opacity: 0, y: 50, scale: 0.8 });
        gsap.set(lineRef.current, { scaleX: 0, opacity: 0 });

        // First, animate the timeline line
        gsap.to(lineRef.current, {
            scaleX: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                // Then show each experience one by one
                experienceRefs.current.forEach((ref, index) => {
                    if (ref) {
                        gsap.to(ref, {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.6,
                            delay: index * 0.3, // Each experience appears 0.3s after the previous
                            ease: "back.out(1.7)",
                        });
                    }
                });
            },
        });
    });

    return (
        <div className="flex flex-col min-h-screen w-full bg-amber-200">
            {/* Title */}
            <div className="text-center py-8">
                <h1 className="font-serif font-bold text-4xl md:text-6xl text-amber-900">
                    Experience & Projects
                </h1>
            </div>

            {/* Horizontal timeline */}
            <div className="flex-grow px-4 pb-44 md:pb-0">
                <div className="w-full max-w-7xl mx-auto">
                    <div ref={timelineRef} className="relative">
                        {/* Main horizontal line */}
                        <div
                            ref={lineRef}
                            className="hidden md:block absolute left-8 right-8 h-2 bg-amber-600 rounded-full shadow-lg z-0 top-16"
                        ></div>

                        {/* Experiences container */}
                        <div className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 md:space-x-4 relative">
                            {workExperiences.map((exp, index) => (
                                <div
                                    key={exp.id}
                                    ref={(el) =>
                                        (experienceRefs.current[index] = el)
                                    }
                                    className="relative flex flex-col items-center group w-full md:w-1/4"
                                    onMouseEnter={() => setHoveredItem(exp.id)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    {/* Date above */}
                                    <div className="mb-4 text-center">
                                        <p className="text-sm md:text-base font-bold text-amber-900 bg-white px-3 py-1 rounded-full shadow-md border-2 border-amber-600">
                                            {exp.year}
                                        </p>
                                    </div>

                                    {/* Circle above the line */}
                                    <div
                                        className={`hidden md:flex w-8 h-8 md:w-10 md:h-10 rounded-full ${exp.color} items-center justify-center text-white font-bold text-lg md:text-xl border-4 border-white shadow-lg transform transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl relative z-20 mb-6`}
                                    ></div>

                                    {/* Experience card */}
                                    <div
                                        className={`p-4 bg-white rounded-lg shadow-lg w-full max-w-sm transition-all duration-300 transform ${
                                            hoveredItem === exp.id
                                                ? "scale-105 shadow-2xl border-2 border-amber-400"
                                                : "border-2 border-transparent"
                                        }`}
                                    >
                                        <div className="text-center">
                                            <h3 className="font-bold text-lg text-amber-900 mb-1">
                                                {exp.company}
                                            </h3>
                                            <h4 className="font-semibold text-md text-blue-700 mb-3">
                                                {exp.position}
                                            </h4>
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-auto">
                <ViewFooter />
            </div>
        </div>
    );
};

export default WorkExperienceView;
