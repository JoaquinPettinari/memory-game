import Timer from "./Timer";
import { StopWatchProps } from '../../../../interfaces'

function StopWatch({ time }: StopWatchProps) {

    return (
        <Timer time={time} />        
    );
}

export default StopWatch;

export { StopWatch };