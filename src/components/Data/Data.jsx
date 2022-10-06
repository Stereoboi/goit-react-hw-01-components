import PropTypes from 'prop-types';
export const Statistics = ({ stats, title }) => {
    return (
        <section class="statistics">
            {title ? (
            <h2 class="title">Upload stats</h2>
            ) : (
             null     
            )}
        
            <ul class="stat-list">
                {stats.map(stat => (
                    <li key={stat.id} class="item">
                        <span class="label">{stat.label}</span>
                        <span class="percentage">{stat.percentage}</span>
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


