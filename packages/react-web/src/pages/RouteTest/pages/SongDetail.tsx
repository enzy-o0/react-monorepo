import React from "react";
import { SongType } from "../RouteApp";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

type Props = { songs: Array<SongType> };
type SongParam = { id?: string };

const SongDetail = (props: Props) => {
  const { id } = useParams<SongParam>();
  const navigate = useNavigate();
  const [title, setTitle] = React.useState<string>("");
  const [musician, setMusician] = React.useState<string>("");
  const [link, setLink] = React.useState<string>("");
  const YOUTUBE_LINK = 'https://m.youtube.com/watch?v="';

  React.useEffect(() => {
    const song = props.songs.find(
      (song) => song.id === parseInt(id ? id : "", 10)
    );

    if (song) {
      setLink(song?.youtube_link ? YOUTUBE_LINK + song.youtube_link : "");
      setTitle(song?.title ? song.title : "");
      setMusician(song?.musician ? song.musician : "");
    } else {
      navigate("/songs");
    }
  }, []);

  return (
    <div className="mt-5">
      <h2>{title}</h2>
      <p>Original Musician: {musician}</p>
      <p>
        <a href={link} target="new">
          View Youtube
        </a>
      </p>
      <Link to="/songs">Return SongList</Link>
    </div>
  );
};

export default SongDetail;
