import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
interface SkeletonCardProps {
  height: number;
  width: number
}

function SkeletonCard({ height,  width }: SkeletonCardProps) {
  return (
    <div className="w-full relative group">
      <Skeleton baseColor="#00000022" highlightColor="#9f64ff2d" height={height} width={width} borderRadius={20} />
    </div>
  );
}

SkeletonCard.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,

};

SkeletonCard.defaultProps = {
  height: 775,
  width: 500,
};

export default SkeletonCard;
