import ReactSlider from "react-slider";

const Slider = (props) => {
    const colors = props.colors;
    const markColors = props.markColors;
    const min = props.min;
    const max = props.max;
    const hasMarks = props.hasMarks;
    const step = props.step;

    var currentIndex;

    return (
        <ReactSlider 
        className="range-slider"
        markClassName="range-mark"
        thumbClassName="range-thumb"
        trackClassName={`range-track ${colors}`}
        ariaValuetext={(value) => {return currentIndex = value.value}}
        min={min}
        max={max}
        marks={hasMarks}
        renderMark={(props) => {
            if (props.key < currentIndex) {
                props.className = `range-mark ${colors}-1`;
            }
            else if (props.key === currentIndex) {
                props.className = `range-mark ${colors}-active`;
            }
            else if (props.key > currentIndex) {
                props.className = `range-mark ${markColors}-1`;
            }

            if (props.key === min || props.key === max) 
            {
                props.className = "range-mark range-mark-empty";
            }
            return <span {...props} />;
        }}
        step={step}
        orientation="vertical"
        valueLabelDisplay="auto"
        onChange={typeof props.sliderValue !== "undefined" ? (value) => props.sliderValue((max ? max : 100) - value - (min ? min : 0)) : null}
        />
     );
}
 
export default Slider;