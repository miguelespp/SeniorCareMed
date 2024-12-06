import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import { Toaster } from "./components/ui/toaster";

function App() {
	const router = createBrowserRouter(routes);
	return (
		<>
			<RouterProvider router={router} />
			<Toaster />
		</>
	);
}

export default App;
