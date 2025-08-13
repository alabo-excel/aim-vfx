import React from "react";

interface VimeoPlayerProps {
  vimeoId: string;
  title: string;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
}

export const VimeoPlayer: React.FC<VimeoPlayerProps> = ({
  vimeoId,
  title,
  autoplay = false,
  loop = false,
  className = ""
}) => {
  const params = new URLSearchParams({
    badge: "0",
    autopause: "0",
    player_id: "0",
    app_id: "58479",
    ...(autoplay && { autoplay: "1" }),
    ...(loop && { loop: "1" })
  });

  return (
    <div className={`relative w-full ${className}`} style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}?${params.toString()}`}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        title={title}
      />
    </div>
  );
};
