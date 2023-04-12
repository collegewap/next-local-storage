import useLocalStorage from "@/hooks/useLocalStorage";
import { useState } from "react";

export default function Home() {
  // Get the value from local storage if it exists
  const [value, setValue] = useLocalStorage("favoriteNumber", "");

  // Set the value received from the local storage to a local state
  const [favoriteNumber, setFavoriteNumber] = useState(value);

  // When user submits the form, save the favorite number to the local storage
  const saveToLocalStorage = (e) => {
    e.preventDefault();
    setValue(favoriteNumber);
  };

  return (
    <div>
      <label htmlFor="number">Your favorite number</label>
      <form onSubmit={saveToLocalStorage}>
        <input
          id="number"
          value={favoriteNumber}
          onChange={(e) => setFavoriteNumber(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}
