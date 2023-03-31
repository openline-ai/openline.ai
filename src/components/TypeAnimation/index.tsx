import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ['move it', 'transform it', 'load it', 'keep it up to date', 'keep it secure', 'keep it performant', 'keep it consistent', 'keep it accurate', 'keep it relevant', 'keep it accessible', 'keep it auditable', 'keep it compliant'];

export const TypeAnimation = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      500 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <TextTransition style={{ margin: "0 4px" }} inline>
      {TEXTS[index % TEXTS.length]}
    </TextTransition>
  );
};