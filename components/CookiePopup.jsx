"use client";

import { useState, useEffect, useRef } from "react";
import cookieData from "../app/cookie-policy/testi.json";
import ButtonPrimary from "./buttonPrimary";

export default function CookiePopup() {
    const [isVisible, setIsVisible] = useState(false);
    const popupRef = useRef(null);

    const handleClosePopup = () => {
        setIsVisible(false);
        localStorage.setItem("cookiePopupSeen", "true");
    };

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem("cookiePopupSeen");
        setIsVisible(!hasSeenPopup);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                handleClosePopup();
            }
        };

        if (isVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [popupRef, isVisible]);

    if (!isVisible) {
        return null;
    }

    const handleDivClick = () => {
        handleClosePopup();
    };

    return (
        <div className="fixed inset-0 z-50">
            <div className="fixed inset-0 bg-secondary opacity-50 "></div>
            <div className="fixed inset-x-0 bottom-0 flex items-end justify-center">
                <div
                    ref={popupRef}
                    className="p-6 w-full bg-secondary"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className=" space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-15 text-white md:text-22 font-semibold">
                                {cookieData.cookieBanner.title}
                            </h2>
                            <p className="text-12 md:text-15 text-white">
                                {cookieData.cookieBanner.information}
                            </p>
                        </div>
                        <div className="flex" onClick={handleDivClick}>
                            <ButtonPrimary url={cookieData.cookieBanner.buttonLink} testo="Approfondisci" internalLink />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}