import { Link } from "react-router-dom";

export const index = () => {
  return (
    <div>
      <Link to={"/dashboard"} className="btn btn-primary">
        Dashboard
      </Link>
    </div>
  );
};
