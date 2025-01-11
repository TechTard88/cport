import React from 'react';
import PropTypes from 'prop-types';
import styles from './Timeline.module.css';

export default function Timeline ({ children }) {
    return (
        <div className={styles.timelineOuterContainer}>
            <div className={styles.timelineInnerContainer}>
                {children}
            </div>
        </div>
    );
};

// Prop validation
Timeline.propTypes = {
    children: PropTypes.node.isRequired,
};