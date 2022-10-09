import PropTypes from 'prop-types';
import css from './Data.module.css';
export const Statistics = ({ stats, title }) => {
    return (
        <section className={css.statistics }>
            {title ? (
            <h2 className={css.title }>Upload stats</h2>
            ) : (
             null     
            )}
        
            <ul className={css.statList }>
                {stats.map(stat => (
                    <li key={stat.id}
                        className={css.item}
                        style={{ backgroundColor: randomColor() }}
                    >
                        <span className={css.label}>{stat.label}</span>
                        <span className={css.percentage}>{stat.percentage}%</span>
                    </li>
                ))}
            
        </ul>
        </section>        
    )
}

Statistics.propTypes = {
    stats:PropTypes.arrayOf(
        PropTypes.shape({
            percentage:PropTypes.number,
            label:PropTypes.string,
            id: PropTypes.string.isRequired
        })
    )
    
}

const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


