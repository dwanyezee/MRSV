import ReactSlider from "react-slider";
import { Slider } from '@mui/material';
import { ClassNames } from "@emotion/react";


const CustomSlider = (props) => {
    const colors = props.colors;
    const min = props.min;
    const max = props.max;
    const hasMarks = props.hasMarks;
    const step = props.step;

    var currentIndex;

    const marks = []

    for (let i = min; i <= max; i += step)
    {
        if (i !== min && i !== max)
        {
            let value = i;
            marks.push({value});
        }
    }

    return (
        <Slider
        min={min}
        max={max}
        orientation="vertical"
        marks={marks}
        onChange={typeof props.sliderValue !== "undefined" ? (e) => props.sliderValue(e.target.value) : null}
        sx={{
            width: "80px",
            height: "250px",
            background: "rgba(37,38,41,0.6)",
            borderRadius: "5px",
            border: "none",
            margin: "0 5px 0 5px",
            "& .MuiSlider-thumb": {
                width: "100%",
                height: "0",
                borderRadius: "0"
            },
            "& .MuiSlider-track": {
                width: "90%",
                margin: "5px",
                left: "46%",
                maxHeight: "95%",
                borderRadius: "5px",
                background: `${colors}`,
                border: "none",
                boxShadow: `0 0 10px ${colors}` 
            },
            "& .MuiSlider-rail": {
                opacity: "0%"
            },
            "& .MuiSlider-mark": {
                left: "0",
                right: "0",
                marginLeft: "auto",
                marginRight: "auto",
                width: "12px",
                height: "12px",
                transform: "rotate(45deg)",
                background: `${colors}`,
                mixBlendMode: "difference",
                boxShadow: `0 0 5px ${colors}`,
                isolation: "isolate",
                zIndex: "5"
            },
            "& .MuiSlider-markActive": {
                //background: `${markColors}`
            },
            "& .MuiSlider-thumb:hover": {
                WebkitBoxShadow: "none",
                boxShadow: "none"
            },
            // "& .Mui-active": {
            //     WebkitBoxShadow: "none",
            //     boxShadow: "none"
            // },
            "& .Mui-focusVisible" : {
                WebkitBoxShadow: "none!important",
                boxShadow: "none!important"
            },
        }}
        />
        // <ReactSlider 
        // className="range-slider"
        // markClassName="range-mark"
        // thumbClassName="range-thumb"
        // trackClassName={`range-track ${colors}`}
        // ariaValuetext={(value) => {return currentIndex = value.value}}
        // min={min}
        // max={max}
        // marks={hasMarks}
        // renderMark={(props) => {
        //     if (props.key < currentIndex) {
        //         props.className = `range-mark ${colors}-1`;
        //     }
        //     else if (props.key === currentIndex) {
        //         props.className = `range-mark ${colors}-active`;
        //     }
        //     else if (props.key > currentIndex) {
        //         props.className = `range-mark ${markColors}-1`;
        //     }

        //     if (props.key === min || props.key === max) 
        //     {
        //         props.className = "range-mark range-mark-empty";
        //     }
        //     return <span {...props} />;
        // }}
        // step={step}
        // orientation="vertical"
        // valueLabelDisplay="auto"
        // onChange={typeof props.sliderValue !== "undefined" ? (value) => props.sliderValue((max ? max : 100) - value - (min ? min : 0)) : null}
        // />
     );
}
 
export default CustomSlider