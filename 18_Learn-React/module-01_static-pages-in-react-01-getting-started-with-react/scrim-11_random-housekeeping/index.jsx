import { createElement } from "react"
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
root.render(
    <main>
        <img src="react-logo.png" />  { /* might cause problem in vite project */}
        { /* alternate approach -- provide root-relative path */ }
        { /* <img src="/src/assets/react-logo.png" /> */ }
        
        <h1>This is another element</h1>
    </main>
)
