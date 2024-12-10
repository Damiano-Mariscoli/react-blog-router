import { languages } from "./data/languages.js";

export function Content() {
  return (
    <>
      <ul>
        {languages.map((language) => (
          <li key={language.id}>{language.title}</li>
        ))}
      </ul>
    </>
  );
}
