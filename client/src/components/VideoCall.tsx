import { Dispatch, SetStateAction } from "react";

const VideoCall = ({
    display,
    displayFn,
}: {
    display: boolean;
    displayFn: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <>
            {/* Overlay */}
            <div
                onClick={() => displayFn(false)}
                className={`w-screen h-screen ${
                    display ? "fixed" : "hidden"
                } top-0 left-0 z-[90]`}
            ></div>

            {/* Video Call Icon */}
            <div
                className="group w-[32px] h-[32px] border border-borders rounded-[99px] relative hover:bg-[#222] cursor-pointer"
                onClick={() => displayFn(!display)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10l4.5-2.5v9L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                    />
                </svg>
            </div>

            {/* Video Call Panel */}
           
            <div
                className="w-[220px] py-4 px-4 bg-black border border-borders z-[120] absolute top-[68px] rounded-lg right-[150px]"
                style={{
                    display: display ? "block" : "none",
                }}
            >
                <div className="text-[14px] text-text_2 w-full">
                    Start a video call using one of the platforms below:
                </div>

                {/* Placeholder start call button */}
                <button className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white text-sm py-1 rounded">
                    Start Call
                </button>

                {/* Zoom button */}
                <a
                    href="https://zoom.us/start/videomeeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 rounded"
                >
                    Start Zoom Meeting
                </a>

                {/* Teams button */}
                <a
                    href="https://teams.microsoft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-1 rounded"
                >
                    Open Microsoft Teams
                </a>
            </div>

        </>
    );
};

export default VideoCall;
