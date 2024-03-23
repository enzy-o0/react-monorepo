import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Members from "./pages/Members";
// import SongList from "./pages/SongList";
// import SongDetail from "./pages/SongDetail";
// import SongDetail from "./pages/SongDetailClass";
// import Player from "./pages/songs/Player";
// import Index from "./components/Index";
// import NotFound from "@/components/NotFound";
const Home = React.lazy(() => pMinDelay(import("./pages/Home"), 1000));
const About = React.lazy(() => pMinDelay(import("./pages/About"), 1000));
const Members = React.lazy(() => pMinDelay(import("./pages/Members"), 1000));
const SongList = React.lazy(() => pMinDelay(import("./pages/SongList"), 1000));
const Player = React.lazy(() =>
  pMinDelay(import("./pages/songs/Player"), 1000)
);
const Index = React.lazy(() => pMinDelay(import("./pages/songs/Index"), 1000));
const NotFound = React.lazy(() =>
  pMinDelay(import("@/components/NotFound"), 1000)
);
import "./styles/index.css";
import SongListData from "../../songs.json";
import Header from "./components/Header";

import pMinDelay from "p-min-delay";
import Loading from "@/components/Loading";

export type MemberType = { name: string; photo: string };
export type SongType = {
  id: number;
  title: string;
  musician: string;
  youtube_link: string;
};

const RouteApp = () => {
  const [members] = React.useState<Array<MemberType>>([
    {
      name: "Maggie Adams",
      photo: "photos/Mag.png",
    },
    {
      name: "Sammie Purcell",
      photo: "photos/Sam.png",
    },
    {
      name: "Tim Purcell",
      photo: "photos/Tim.png",
    },
    {
      name: "Scott King",
      photo: "photos/King.png",
    },
    {
      name: "Johnny Pike",
      photo: "photos/JPike.jpg",
    },
    {
      name: "Toby Ruckert",
      photo: "photos/Toby.jpg",
    },
  ]);
  const [songs] = React.useState<Array<SongType>>([...SongListData]);
  return (
    <React.Suspense fallback={<Loading />}>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/about"
              element={<About title={"여우와 늙다리들"} />}
            />
            <Route path="/members" element={<Members members={members} />} />
            {/* <Route path="/songs" element={<SongList songs={songs} />} />
          <Route path="/songs/:id" element={<SongDetail songs={songs} />} /> */}
            <Route path="/songs" element={<SongList songs={songs} />}>
              <Route index element={<Index />} />
              {/* <Route path=":id" element={<Player songs={songs} />} /> */}
              <Route path=":id" element={<Player />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </React.Suspense>
  );
};

export default RouteApp;
