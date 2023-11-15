import React from 'react';
import StatisticsBar from './StatisticsBar';
import {
  TOTAL_GOALS,
  GOAL_DEFFERENCE,
  ASSISTS,
  GOALS_AGAINST,
} from 'src/common/constants';

const TeamStatistics = () => {
  return (
    <div className="bg-white py-6 my-1">
      <h3 className="text-neutral-900 px-4 font-semibold uppercase">
        Team Statistics
      </h3>
      <StatisticsBar {...TOTAL_GOALS} />
      <StatisticsBar {...GOAL_DEFFERENCE} />
      <StatisticsBar {...ASSISTS} />
      <StatisticsBar {...GOALS_AGAINST} />
    </div>
  );
};

export default TeamStatistics;
