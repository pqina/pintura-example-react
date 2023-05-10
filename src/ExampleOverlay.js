import React, { useState } from "react";

// react-pintura
import { PinturaEditorOverlay } from "@pqina/react-pintura";

// pintura
import "@pqina/pintura/pintura.css";
import {
  // editor
  locale_en_gb,
  createDefaultImageReader,
  createDefaultImageWriter,

  // plugins
  setPlugins,
  plugin_crop,
  plugin_crop_locale_en_gb,
} from "@pqina/pintura";

setPlugins(plugin_crop);

const editorDefaults = {
  imageReader: createDefaultImageReader(),
  imageWriter: createDefaultImageWriter(),
  locale: {
    ...locale_en_gb,
    ...plugin_crop_locale_en_gb,
  },
};

export default function ExampleOverlay() {
  // overlay
  const [visible, setVisible] = useState(false);
  const [result, setResult] = useState({
    imagePreview: "./image.jpeg",
    imageState: undefined,
  });

  return (
    <div className="App">
      <h2>Overlay</h2>

      <p>
        {!visible && (
          <button onClick={() => setVisible(true)}>Edit image</button>
        )}
        {visible && (
          <button onClick={() => setVisible(false)}>Close editor</button>
        )}
      </p>

      {!visible && (
        <p>
          <img width="512" height="256" src={result.imagePreview} alt="" />
        </p>
      )}
      {visible && (
        <div style={{ width: "512px", height: "256px" }}>
          <PinturaEditorOverlay
            src={"./image.jpeg"}
            {...editorDefaults}
            imageState={result.imageState}
            onLoad={(res) => console.log("load image", res)}
            onProcess={({ dest, imageState }) => {
              setResult({
                imagePreview: URL.createObjectURL(dest),
                imageState: imageState,
              });
              setVisible(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
