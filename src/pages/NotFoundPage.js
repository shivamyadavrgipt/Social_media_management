import React from 'react';

const NotFoundPage = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        minHeight: '500px',
        flexGrow: 1,
        backgroundColor: 'white',
        textAlign: 'center',
        color: '#333',
        fontFamily: "'Roboto', sans-serif",
        overflow: 'hidden',
    };

    const backgroundTextStyle = {
        position: 'absolute',
        fontSize: '12rem',
        color: '#f0f0f0',
        fontWeight: 'bold',
        top: '15rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
    };

    const botContainerStyle = {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
    };

    const botImageStyle = {
        width: '150px',
        filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2))',
    };

    const imageFlex = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const tearStyle = {
        position: 'absolute',
        top: '27%',
        left: '46%',
        width: '8px',
        height: '15px',
        backgroundColor: '#00aaff',
        borderRadius: '50%',
        animation: 'tear-fall 2s linear infinite',
    };

    const spiritImageStyle = {
        transform: 'scale(3.5)',
        width: '40px',
        height: '40px',
        animation: 'fade-in 1.5s ease-in-out forwards',
    };

    const textContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666',
        fontSize: '1.5rem',
        fontWeight: '600',
        marginTop: '10px',
    };

    return (
        <div style={containerStyle}>
            <div style={backgroundTextStyle}>404</div>
            <div style={imageFlex}>
                <div style={botContainerStyle}>
                    <img
                        src="https://cdni.iconscout.com/illustration/premium/thumb/robot-with-wrong-sign-illustration-download-in-svg-png-gif-file-formats--holding-cross-board-character-pack-science-technology-illustrations-7712790.png?f=webp"
                        alt="Sad bot"
                        style={botImageStyle}
                    />
                    <div style={tearStyle}></div>
                </div>
                <div style={textContainerStyle}>
                    <img
                        src="https://cdn.dribbble.com/users/85756/screenshots/2540208/ghosty.gif"
                        alt="Spirit"
                        style={spiritImageStyle}
                    />
                    <span style={{ zIndex: 9 }}>Oops! Page Not Found!!</span>
                </div>
            </div>

            {/* Inline Keyframes for Animation */}
            <style>
                {`
                    @keyframes tear-fall {
                        0% { transform: translateY(0); opacity: 1; }
                        100% { transform: translateY(60px); opacity: 0; }
                    }

                    @keyframes fade-in {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                `}
            </style>
        </div>
    );
};

export default NotFoundPage;
