import PropTypes from "prop-types";
import StatisticsElement from './StatisticsElement';
import { Section, Container, Title, List, El } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      <Container className="container">
        {title ? (
          <Title className="title">{title}</Title>) : null}
          <List className="stat-list">
            {stats.map((statsEl) => (
              <El className="item" key={statsEl.id}>
                <StatisticsElement
                  label={statsEl.label}
                  percentage={statsEl.percentage}
                />
              </El>
            ))}
          </List>
        </Container>
    </Section>
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

