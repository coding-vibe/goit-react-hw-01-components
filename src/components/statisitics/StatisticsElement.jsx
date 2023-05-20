import PropTypes from "prop-types";
import { Label, Percentage} from './Statistics.styled';

const StatisticsElement = ({ label, percentage }) => {
    return (
        <div>
            <Label className="label">{label}</Label>
            <Percentage className="percentage">{percentage}%</Percentage>
        </div>
    );
};

StatisticsElement.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatisticsElement;