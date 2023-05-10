import React, { useState } from "react";

// react-pintura
import { PinturaEditor } from "@pqina/react-pintura";

// pintura
import "@pqina/pintura/pintura.css";
import { getEditorDefaults } from "@pqina/pintura";

// get default properties
const editorDefaults = getEditorDefaults({
  stickers: ["😎", "sticker-one.svg", "sticker-two.svg", "sticker-three.svg"],
});

export default function Example() {
  // inline result
  const [result, setResult] = useState("");

  return (
    <div>
      <h2>Defaults</h2>

      <div style={{ height: "70vh" }}>
        <PinturaEditor
          {...editorDefaults}
          src={"./image.jpeg"}
          imageCropAspectRatio={1}
          onLoad={(res) => console.log("load image", res)}
          onProcess={({ dest }) => setResult(URL.createObjectURL(dest))}
        />
      </div>

      {!!result.length && (
        <p>
          <img src={result} alt="" />
        </p>
      )}
    </div>
  );
}
