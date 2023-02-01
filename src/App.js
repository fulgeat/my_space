import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import MusicArtists from './components/Music/Artists/MusicArtists';
import Music from './components/Music/Music';
import MusicNewReleases from './components/Music/New/Releases/MusicNewReleases';
import MusicVA from './components/Music/VA/MusicVA';
import MainLayout from './layout/MainLayout';
import SearchLayout from './layout/SearchLayout';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<SearchLayout />}>
                        <Route index element={<Home />} />
                        <Route path="music" element={<Music />}>
                            <Route path="new" element={<Music />} />
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
