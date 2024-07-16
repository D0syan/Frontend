import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./app.css";
import { MainPage, UserInfoPage, UsersPage } from "./pages";
import PlaylistPage from "./pages/PlaylistPage/Playlists/Playlists";
import PlaylistList from "./pages/PlaylistPage/PlaylistList/PlaylistList";

export function App() {
	return (
		<BrowserRouter>
			<div className="header">_</div>

			<div className="section">
				<nav className="navMenu">
					<Link to={"/"}>Главная</Link>
					<Link to={"/users"}>Пользователи</Link>
					<Link to={"/playlists"}>Плейлисты</Link>
				</nav>

				<main className="content">
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/users" element={<UsersPage />} />
						<Route path="/users/:userId" element={<UserInfoPage />} />
						<Route path="/playlists" element={<PlaylistList />} />
						<Route path="/playlists/:playlistId" element={<PlaylistPage />} />
					</Routes>

				</main>
			</div>

			<div className="footer">
				<a href="https://skillbox.ru/code/">https://skillbox.ru/</a>
			</div>
		</BrowserRouter>
	);
}
