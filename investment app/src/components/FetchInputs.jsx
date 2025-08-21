import { useState } from 'react';

export default function FetchInputs() {
  const [initialIv, setInitialIv] = useState();

  function handleSubmit(e) {
    e.preventDefault(); // prevent page refresh
  }

  return (
    <form onSubmit={handleSubmit} id="user-input" className="input-group">
      <label>
        Initial Investment
        <input type="text" />
      </label>
      <label>
        Annual Investment
        <input type="text" />
      </label>
      <label>
        Expected Return
        <input type="text" />
      </label>
      <label>
        Duration
        <input type="text" />
      </label>
    </form>
  );
}
