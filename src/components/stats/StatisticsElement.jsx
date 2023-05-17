import PropTypes from "prop-types";

const StatisticsElement = ({ label, percentage }) => {
    return (
        <div>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </div>
    );
};

StatisticsElement.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatisticsElement;