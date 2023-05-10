import React, { useState } from "react";

// pintura
import "@pqina/pintura/pintura.css";
import {
  // editor
  openEditor,
  locale_en_gb,
  createDefaultImageReader,
  createDefaultImageWriter,
  createDefaultImageOrienter,
  createDefaultShapePreprocessor,
  legacyDataToImageState,
  processImage,

  // plugins
  setPlugins,
  plugin_crop,
  plugin_crop_locale_en_gb,
  plugin_finetune,
  plugin_finetune_locale_en_gb,
  plugin_finetune_defaults,
  plugin_filter,
  plugin_filter_locale_en_gb,
  plugin_filter_defaults,
  plugin_annotate,
  plugin_annotate_locale_en_gb,
  markup_editor_defaults,
  markup_editor_locale_en_gb,
} from "@pqina/pintura";

// filepond
import "filepond/dist/filepond.min.css";
import "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.min.css";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFilePoster from "filepond-plugin-file-poster";
import FilePondPluginImageEditor from "@pqina/filepond-plugin-image-editor";
registerPlugin(FilePondPluginImageEditor, FilePondPluginFilePoster);

// pintura
setPlugins(plugin_crop, plugin_finetune, plugin_filter, plugin_annotate);

export default function ExampleFilePond() {
  const [files, setFiles] = useState([]);

  return (
    <div>
      <h2>FilePond</h2>
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        filePosterMaxHeight={256}
        server="/api"
        name="files"
        imageEditor={{
          // map legacy data objects to new imageState objects
          legacyDataToImageState: legacyDataToImageState,

          // used to create the editor, receives editor configuration, should return an editor instance
          createEditor: openEditor,

          // Required, used for reading the image data
          imageReader: [
            createDefaultImageReader,
            {
              /* optional image reader options here */
            },
          ],

          // optionally. can leave out when not generating a preview thumbnail and/or output image
          imageWriter: [
            createDefaultImageWriter,
            {
              /* optional image writer options here */
            },
          ],

          // used to generate poster images, runs an editor in the background
          imageProcessor: processImage,

          // editor options
          editorOptions: {
            utils: ["crop", "finetune", "filter", "annotate"],
            imageOrienter: createDefaultImageOrienter(),
            shapePreprocessor: createDefaultShapePreprocessor(),
            ...plugin_finetune_defaults,
            ...plugin_filter_defaults,
            ...markup_editor_defaults,
            locale: {
              ...locale_en_gb,
              ...plugin_crop_locale_en_gb,
              ...plugin_finetune_locale_en_gb,
              ...plugin_filter_locale_en_gb,
              ...plugin_annotate_locale_en_gb,
              ...markup_editor_locale_en_gb,
            },
          },
        }}
      />
    </div>
  );
}
