import { useEffect } from "react";

const getYouTubeEmbedUrl = (url) => {
    try {
        const urlObj = new URL(url);
        let videoId = urlObj.searchParams.get("v");

        // If it's a short URL or embed URL
        if (!videoId) {
            const pathSegments = urlObj.pathname.split("/");
            videoId = pathSegments[pathSegments.length - 1]; // Extract last part of URL
        }

        return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    } catch (error) {
        console.error("Error parsing YouTube URL:", url, error);
        return url;
    }
};

export function Card({ title, link, type }) {
    const formattedTwitterLink = typeof link === "string" ? link.replace("x.com", "twitter.com") : "";

    useEffect(() => {
        if (type === "twitter") {
            const loadTwitterScript = () => {
                if (!window.twttr) {
                    const script = document.createElement("script");
                    script.src = "https://platform.twitter.com/widgets.js";
                    script.async = true;
                    document.body.appendChild(script);
                    script.onload = () => window.twttr?.widgets?.load();
                } else {
                    window.twttr.widgets.load();
                }
            };
            loadTwitterScript();
        }
    }, [type]);

    let content;

    switch (type) {
        case "youtube":
            content = (
                <iframe
                    className="w-full"
                    style={{ aspectRatio: "16/9" }}
                    draggable
                    src={getYouTubeEmbedUrl(link)}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            );
            break;
        case "twitter":
            content = (
                <blockquote className="twitter-tweet">
                    <a href={formattedTwitterLink}>{formattedTwitterLink}</a>
                </blockquote>
            );
            break;
        case "facebook":
            content = <p>Facebook content placeholder. Implement Facebook embed logic here.</p>;
            break;
        case "instagram":
            content = <p>Instagram content placeholder. Implement Instagram embed logic here.</p>;
            break;
        default:
            content = <p>Unsupported content type.</p>;
    }

    return (
        <div className="bg-white font-light border rounded-md shadow-md border-gray-200 break-inside-avoid">
            <div className="p-2 flex justify-between items-center">
                <div>{title}</div>
                <div>
                    <a href={link} target="_blank" rel="noopener noreferrer">🔗</a>
                </div>
            </div>
            <div className="p-2">{content}</div>
        </div>
    );
}

export default Card;
