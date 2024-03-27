import ReactSlider from "react-slider";

const Slider = (props) => {
    const colors = props.colors;
    const defaultValue = props.defaultValue;
    const min = props.min;
    const max = props.max;
    const hasMarks = props.hasMarks;
    const step = props.step;

    return (
        <ReactSlider 
        className="range-slider"
        markClassName="range-mark"
        thumbClassName="range-thumb"
        trackClassName={`range-track ${colors}`}
        defaultValue={defaultValue}
        min={min}
        max={max}
        marks={hasMarks}
        step={step}
        orientation="vertical"
        />
     );
}
 
export default Slider;