import { useState } from 'react';

function ButtonS() {
    const [status, setStatus] = useState(true);
  
    return (
      <div>
        {status&&<h1>Button</h1>}
        <button onClick={() => setStatus(!status)}>
          Click me
        </button>
      </div>
    );
  }
  export default ButtonS;
