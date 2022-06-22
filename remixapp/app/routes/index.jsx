import Button from "./components/atoms/Button";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <Button>짧은</Button>
        <Button color="#000" background="#ffff99">긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글</Button>
        <Button color="#000" background="#ff9999">Hello</Button>
        <Button color="#fff" background="#9999ff">hi</Button>
    </div>
  );
}
