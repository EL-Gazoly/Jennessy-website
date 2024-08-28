import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type TypingEffectProps = {
  text: string;
  speed?: number;
  onComplete?: () => void;
  isTypingComplete?: boolean;
};

const TypingEffect = ({
  text,
  speed = 50,
  onComplete,
  isTypingComplete,
}: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;
      if (index === text.length) {
        onComplete && onComplete();
        clearInterval(intervalId);
      }
    }, speed);
    return () => clearInterval(intervalId);
  }, [text, speed]);

  //function to remove the undefiend from the text
  if (displayedText.includes("undefined")) {
    setDisplayedText(displayedText.replace("undefined", ""));
  }

  return (
    <div>
      {/* show the displayed text and a blinking cursor beside it  */}
      {displayedText}
      <span
        className={cn("animate-blink", isTypingComplete && "hidden")}
        style={{
          color: "#1a56db",
        }}
      >
        |
      </span>
    </div>
  );
};

export default TypingEffect;
