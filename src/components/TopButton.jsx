import React, { useEffect, useState } from "react";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

function TopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const scrollFunction = () => {
            // Log scroll position
            // console.log("Scroll position:", window.scrollY);
            if (window.scrollY > 400) {
                setIsVisible(true);
                // For Checking 
                // console.log("Button is now visible");
            } else {
                setIsVisible(false);
                // For Checking 
                // console.log("Button is now hidden");
            }
        };

        window.addEventListener("scroll", scrollFunction);

        return () => window.removeEventListener("scroll", scrollFunction);
    }, []);

    return (
        <div
            className="top-btn"
            style={{
                display: isVisible ? "flex" : "none",
                position: "fixed",
                bottom: "20px",
                right: "20px",
                width: "auto",
                height: "auto",
                backgroundColor: "#64FFDA",
                color: "#112240",
                borderRadius: "50%",
                padding: "15px",
                zIndex: 1000,
                cursor: "pointer"
            }}
            onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
        >
            <ExpandLessRoundedIcon />
        </div>
    );
}

export default TopButton;
