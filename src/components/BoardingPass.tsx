import type { PassengerInfo } from "../types";

type BoardingPassProps = {
  info: PassengerInfo;
};

function BoardingPass({ info }: BoardingPassProps) {
  return (
    <div className="pass">
      <div className="pass-header">✈️ BOARDING PASS</div>

      <div className="pass-body">
        <div className="field">
          <small>PASSENGER</small>
          <strong>{info.name || "YOUR NAME"}</strong>
        </div>

        <div className="route">
          <div className="field">
            <small>FROM</small>
            <strong>{info.from || "ORIGIN"}</strong>
          </div>
          <span className="arrow">→</span>
          <div className="field">
            <small>TO</small>
            <strong>{info.to || "DESTINATION"}</strong>
          </div>
        </div>

        <div className="details">
          <div className="field">
            <small>FLIGHT</small>
            <strong>{info.flightNumber || "XX 000"}</strong>
          </div>
          <div className="field">
            <small>SEAT</small>
            <strong>{info.seat || "--"}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardingPass;