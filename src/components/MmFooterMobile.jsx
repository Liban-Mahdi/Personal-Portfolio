import { useEffect, useState } from "react";

const MmFooterMobile = () => {
    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");
    const [showColon, setShowColon] = useState(true);
    const [meridem, setMeridem] = useState("");

    // Get the current date and time and format them
    useEffect(() => {
        const updateDateTime = () => {
            const date = new Date();
            const formattedDate = date.toLocaleDateString("en-US", {
                weekday: "short",
                month: "numeric",
                day: "numeric",
            });
            const formattedTime = date.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
            });

            // Remove the comma before saving the date
            const cleanedDate = formattedDate.replace(/,/g, "");

            // Remove AM/PM from the time and store it separately
            const cleanedTime = formattedTime.replace(/(AM|PM)/, "").trim();
            setMeridem(formattedTime.match(/(AM|PM)/)[0]);

            setCurrentDate(cleanedDate);
            setCurrentTime(cleanedTime);
        };

        // Update date and time immediately
        updateDateTime();

        // Interval to update date/time every second
        const intervalId = setInterval(() => {
            updateDateTime();
            setShowColon((prev) => !prev); // Toggle colon visibility every second
        }, 1000);

        // Clear interval when component unmounts
        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = currentTime.replace(":", showColon ? ":" : " ");

    return (
        <footer className="fixed bottom-0 left-0 w-full flex justify-center items-center border-4 border-t-[#00c4ff] bg-gray-400 pt-2">
            <div className="">
                {/* Current Date and Time */}
                <div className="relative z-10 text-center top-0 flex flex-col items-center justify-start">
                    {/* Container for Time and Meridem */}
                    <div className="flex items-end relative pl-10">
                        {/* Time */}
                        <div className="font-e1234 font-bold text-gray-500 text-2xl">
                            {formattedTime}
                        </div>

                        {/* Meridem */}
                        <div className="font-rodin text-gray-500 text-xs pl-1 mb-1">
                            {meridem}
                        </div>
                    </div>

                    {/* Current Date */}
                    <div className="font-rodin relative font-extrabold text-2xl text-white">
                        {currentDate}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MmFooterMobile;
