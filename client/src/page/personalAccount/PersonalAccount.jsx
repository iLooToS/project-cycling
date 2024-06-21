import { useEffect, useState } from "react";
import "./PersonalAccount.css";
import requestAxios from "../../services/axios";

function PersonalAccount({ user, setWauPoint, setTrails }) {
  const [error, setError] = useState(null);

  const [title, setTitle] = useState("");
  const [istitle, issetTitle] = useState(false);

  const [description, setDescription] = useState("");
  const [isdescription, issetDescription] = useState(false);

  const [firstPointLatitude, setFirstPointLatitude] = useState("");
  // const [isfirstPointLatitude, issetFirstPointLatitude] = useState(false);

  const [firstPointLongitude, setFirstPointLongitude] = useState("");
  // const [isfirstPointLongitude, issetFirstPointLongitude] = useState(false);

  const [secondPointLatitude, setSecondPointLatitude] = useState("");
  // const [issecondPointLatitude, issetSecondPointLatitude] = useState(false);

  const [secondPointLongitude, setSecondPointLongitude] = useState("");
  // const [issecondPointLongitude, issetSecondPointLongitude] = useState(false);

  useEffect(() => {
    if (title.length > 0) {
      issetTitle(false);
    }
  }, [title]);

  useEffect(() => {
    if (description.length > 0) {
      issetDescription(false);
    }
  }, [description]);

  // useEffect(() => {
  //   if (firstPointLatitude.length > 0) {
  //     issetFirstPointLatitude(false);
  //   }
  // }, [firstPointLatitude]);

  // useEffect(() => {
  //   if (firstPointLongitude.length > 0) {
  //     issetFirstPointLongitude(false);
  //   }
  // }, [firstPointLongitude]);

  // useEffect(() => {
  //   if (secondPointLatitude.length > 0) {
  //     issetSecondPointLatitude(false);
  //   }
  // }, [secondPointLatitude]);

  // useEffect(() => {
  //   if (secondPointLongitude.length > 0) {
  //     issetSecondPointLongitude(false);
  //   }
  // }, [secondPointLongitude]);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (title.length === 0) {
        issetTitle(true);
      }

      if (description.length === 0) {
        issetDescription(true);
      }

      // if (firstPointLatitude.length === 0) {
      //   issetFirstPointLatitude(true);
      // }

      // if (firstPointLongitude.length === 0) {
      //   issetFirstPointLongitude(true);
      // }

      // if (secondPointLatitude.length === 0) {
      //   issetSecondPointLatitude(true);
      // }

      // if (secondPointLongitude.length === 0) {
      //   issetSecondPointLongitude(true);
      // }
      if (firstPointLatitude.length === 0 || secondPointLatitude.length === 0 || firstPointLongitude.length === 0 || secondPointLongitude.length === 0) {
        setError("Fill in all fields");
        return;
      }
      const { data } = await requestAxios.post("/trails", {
        title,
        description,
        firstPointLatitude,
        firstPointLongitude,
        secondPointLatitude,
        secondPointLongitude,
      });
      if (data.message === "success") {
        setTitle("");
        setDescription("");
        setFirstPointLatitude("");
        setFirstPointLongitude("");
        setSecondPointLatitude("");
        setSecondPointLongitude("");
        setWauPoint(data.waypoint);
        setTrails(data.trails);
      }
    } catch ({ response }) {
      setError(response.data.message);
      setInterval(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <div>
      <h1 className="account-page-text">Personal Account</h1>
      <div className="account-wrapper">
        <div className="account-img-wrapper">
          <img
            className="account-image"
            src="/img/Profile-Avatar-PNG.png"
            alt="accountPhoto"
          />
        </div>
        <div className="account-info-wrapper">
          <h2 className="account-name">User Name: {user.name}</h2>
          <p className="account-email">Email: {user.email}</p>
          <button className="account-change-info" type="button">
            Change information
          </button>
        </div>
      </div>
      <div>
        <h1 className="account-page-text">Create Route</h1>
        <form onSubmit={onHandleSubmit}>
          <label className="account-label">
            {istitle && (
              <p className="validation-error">Fill in the Name field!</p>
            )}
            <input
              className="account-input"
              type="text"
              value={title}
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="account-label">
            {isdescription && (
              <p className="validation-error">Fill in the Name field!</p>
            )}
            <input
              className="account-input"
              type="text"
              value={description}
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <div className="latitude-longitude-wrapper">
            <label className="account-label">
              {/* {isfirstPointLatitude && (
                <p className="validation-error">Fill in the Name field!</p>
              )} */}
              <input
                className="account-input latitude"
                type="text"
                value={firstPointLatitude}
                placeholder="First point latitude"
                onChange={(e) => setFirstPointLatitude(e.target.value)}
              />
            </label>
            <label className="account-label">
              {/* {isfirstPointLongitude && (
                <p className="validation-error">Fill in the Name field!</p>
              )} */}
              <input
                className="account-input longitude"
                type="text"
                value={firstPointLongitude}
                placeholder="First point longitude"
                onChange={(e) => setFirstPointLongitude(e.target.value)}
              />
            </label>
          </div>
          <div className="latitude-longitude-wrapper">
            <label className="account-label">
              {/* {issecondPointLatitude && (
                <p className="validation-error">Fill in the Name field!</p>
              )} */}
              <input
                className="account-input latitude"
                type="text"
                value={secondPointLatitude}
                placeholder="Second point latitude"
                onChange={(e) => setSecondPointLatitude(e.target.value)}
              />
            </label>
            <label className="account-label">
              {/* {issecondPointLongitude && (
                <p className="validation-error">Fill in the Name field!</p>
              )} */}
              <input
                className="account-input longitude"
                type="text"
                value={secondPointLongitude}
                placeholder="Second point longitude"
                onChange={(e) => setSecondPointLongitude(e.target.value)}
              />
            </label>
          </div>
          {error && <p>{error}</p>}
          <button className="account-submit-button" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default PersonalAccount;
