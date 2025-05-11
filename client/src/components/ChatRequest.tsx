import { Dispatch, SetStateAction } from "react";

const ChatRequest = ({
    display,
    displayFn,
}: {
    display: boolean;
    displayFn: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <>
            {/* Background overlay when active */}
            <div
                onClick={() => displayFn(false)}
                className={`w-screen h-screen ${
                    display ? "fixed" : "hidden"
                } top-0 left-0 z-[90]`}
            ></div>

            {/* Chat Icon Button */}
            <div
                className="group w-[32px] h-[32px] border border-borders rounded-[99px] relative hover:bg-[#222] cursor-pointer"
                onClick={() => displayFn(!display)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-chat-left-dots absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-white"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                >
                    <path d="M14 1a1 1 0 0 1 1 1v11.793l-2.293-2.293A1 1 0 0 0 12 11H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zm-4 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-3 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-3 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                </svg>
            </div>

            {/* Chat Request Panel */}
            <div
                className="w-[220px] py-4 px-4 bg-black border border-borders z-[120] absolute top-[68px] rounded-lg right-[100px]"
                style={{
                    display: display ? "block" : "none",
                }}
            >
                <div className="text-[14px] text-text_2 w-full">
                    Send a chat request to another user.
                </div>
                <input
                    type="text"
                    placeholder="Enter username"
                    className="mt-2 w-full px-2 py-1 text-sm bg-gray-800 text-white border border-gray-700 rounded"
                />
                <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 rounded">
                    Send Request
                </button>
            </div>
        </>
    );
};

export default ChatRequest;
