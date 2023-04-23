import { useEffect, useRef } from "react";

function App() {
  //ref hook
  const ref = useRef<HTMLInputElement>(null);

  //afer render
  useEffect(() => {
    //side effect
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <>
      <div>
        <input ref={ref} type="text" className="form-control" />
      </div>
    </>
  );
}

export default App;
