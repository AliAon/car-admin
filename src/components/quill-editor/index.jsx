import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

export default function QuillEditor({ value, onChange }) {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      style={{ height: "300px", marginBottom: "40px" }}
    />
  );
}
