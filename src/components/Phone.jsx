import '../styles/Phone.css';
import dogPhotoOne from '../images/dog-image-1.jpg';

function Phone(){
    return (
        <>  
            <div className="phone-container">
                <div className='phone-top'></div>
                <div className='contact-information'>
                    <div className='contact-text-left'>
                        <span className='contact-left-arrow'>&#10094;</span>
                        <div className='contact-photo'></div>
                        <div className='contact-status'>
                            <div className='contact-name'>Samuel Green</div>
                            <div className='contact-availability'>Available to Walk</div>
                        </div>
                    </div>
                    <div className='contact-text-right'>&#8942;</div>
                </div>
                <div className='phone-body'>
                    <div className='message left-align top-message'>That sounds great. I'd be happy to discuss more.</div>
                    <div className='message left-align'>Could you send over some pictures of your dog, please?</div>
                    <div className='image-row'>
                        <div className='image-box dog-photo-one'></div>
                        <div className='image-box dog-photo-two'></div>
                        <div className='image-box dog-photo-three'></div>
                    </div>
                    <div className='message right-align'>Here are a few pictures. She's a happy girl!</div>
                    <div className='message last-right-message'>Can you make it?</div>
                    <div className='message left-align'>She looks so happy! The time we discussed works. How long shall I take her out for?</div>
                    <div className='message left-align time-option'>
                        <div className='time-option-left'>
                            <div className='time-option-circle'></div>
                            <div className='time-option-info'>30 minute walk</div>
                        </div>
                        <div className='time-option-right'>$29</div>
                    </div>
                    <div className='message left-align time-option'>
                        <div className='time-option-left'>
                            <div className='time-option-circle'></div>
                            <div className='time-option-info'>1 hour walk</div>
                        </div>
                        <div className='time-option-right'>$49</div>
                    </div>
                    <div className='message-box-container'>
                        <div className='message-box-body'>Type a message...</div>
                        <div className='message-arrow'><span className='right-arrow-span'>&#10095;</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Phone;