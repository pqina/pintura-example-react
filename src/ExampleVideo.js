import React, { useState } from "react";

// react-pintura
import { PinturaEditor } from "@pqina/react-pintura";

// pintura
import "@pqina/pintura/pintura.css";
import { getEditorDefaults } from "@pqina/pintura";
/*
// Import Pintura Video extension dependencies
import {
  setPlugins,
  createDefaultImageWriter,
  createDefaultMediaWriter,
  imageStateToCanvas,
} from "@pqina/pintura";

import "@pqina/pintura-video/pinturavideo.css";
import {
  plugin_trim_locale_en_gb,
  plugin_trim,
  createDefaultVideoWriter,
  createMediaStreamEncoder,
} from "@pqina/pintura-video";

// Load the Trim plugin view
setPlugins(plugin_trim);

*/

// get default properties
const editorDefaults = getEditorDefaults({
  /*
  locale: {
    // Add the Trim plugin locale
    ...plugin_trim_locale_en_gb,
  },
  imageWriter: createDefaultMediaWriter(
    // Generic Media Writer options, passed to image and video writer
    {
      targetSize: {
        width: 400,
      },
    },
    [
      // For handling images
      createDefaultImageWriter(),

      // For handling videos
      createDefaultVideoWriter({
        // Video writer instructions here
        // ...

        // Encoder to use
        encoder: createMediaStreamEncoder({
          imageStateToCanvas,
        }),
      }),
    ]
  ),
  */
});

export default function Example() {
  // inline result
  const [result, setResult] = useState("");

  return (
    <div>
      <h2>Video extension</h2>

      <p>
        Please run <code>npm install @pqina/pintura-video</code>, and uncomment
        the{" "}
        <a href="https://pqina.nl/pintura/docs/v8/api/video-editor/">
          video extension
        </a>{" "}
        related code in the `ExampleVideo.js` file. Please note that the video
        editor extension is only available on the PQINA private npm and requires
        purchasing a license.
      </p>

      <div style={{ height: "70vh" }}>
        <PinturaEditor
          {...editorDefaults}
          src={"./video.mp4"}
          stickers={["😎"]}
          imageCropAspectRatio={1}
          onLoad={(res) => console.log("load media", res)}
          onProcess={({ dest }) => dest && setResult(URL.createObjectURL(dest))}
        />
      </div>

      {!!result.length && (
        <p>
          <video src={result} />
        </p>
      )}
    </div>
  );
}
