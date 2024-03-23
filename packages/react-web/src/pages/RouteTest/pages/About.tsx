import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

type Props = { title: string };

const About = (props: Props) => {
  let [searchParams, setSeachParams] = useSearchParams();
  const [page, setPage] = React.useState<number>(1);
  const navigate = useNavigate();

  React.useEffect(() => {
    const strPage = searchParams.get("page");
    setPage(parseInt(strPage !== null ? strPage : "1", 10));
  }, [searchParams]);

  const goPrev = () => {
    if (page > 1) navigate(location.pathname + "?page=" + (page - 1));
  };

  const goNext = () => {
    navigate(location.pathname + "?page=" + (page + 1));
  };

  return (
    <div className="card card-body">
      <h2>About {props.title}</h2>
      <div>
        <div className="m-2">현재 페이지 : {page}</div>
        <button className="btn btn-secondary m-1" onClick={goPrev}>prev</button>
        <button className="btn btn-secondary m-1" onClick={goNext}>next</button>
      </div>
    </div>
  );
};

export default About;
