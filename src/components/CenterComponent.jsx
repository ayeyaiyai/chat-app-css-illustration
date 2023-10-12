import Phone from './Phone.jsx';
import '../styles/CenterComponent.css';

function CenterComponent() {
    return(
        <div className='component-body'>
            <div className='purple-section'></div>
            <div className='center-component'>
                <div className='phone'>
                    <Phone />
                </div>
                <div className='text-container'>
                    <div className='text-title'>Simple booking</div>
                    <div className='text-description'>Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.</div>
                </div>
            </div>
            <div className='grey-section'></div>
        </div>
    )
}

export default CenterComponent;