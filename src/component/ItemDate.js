import './ItemDate.css'

function ItemDate(props) {
    const itemDate = props.day;
    const itemMonth = props.month;
    const itemyear = props.year;
    
    return (
        <div className='data'>
            <span>{itemDate}</span>
            <span>{itemMonth}</span>
            <span>{itemyear}</span>
        </div>
    );
}

export default ItemDate;