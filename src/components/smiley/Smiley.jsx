import "./Smiley.css";

const Smiley = () => {
    /* Add multi smiley div for brigther color */
    return (
        <div className="smiley-wrapper">
            <div className="smiley smiley--gold" />
            <div className="smiley smiley--gold" />
            <div className="smiley smiley--gold" />
            <div className="smiley smiley--blue" />
            <div className="smiley smiley--blue" />
            <div className="smiley smiley--blue" />
        </div>
    );
};

export default Smiley;
