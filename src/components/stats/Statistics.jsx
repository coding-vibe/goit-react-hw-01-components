import PropTypes from "prop-types";
import StatisticsElement from './StatisticsElement';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {!(title === "") ? (
        <>
          <h2 className="title">{title}</h2>
          <ul className="stat-list">
            {stats.map(statsEl => (
              <li className="item" key={statsEl.id}>
                <StatisticsElement 
                  label={statsEl.label}
                  percentage={statsEl.percentage}
                />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ul className="stat-list">
          {stats.map(statsEl => (
            <li className="item" key={statsEl.id}>
              <StatisticsElement 
                label={statsEl.label}
                percentage={statsEl.percentage}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;

