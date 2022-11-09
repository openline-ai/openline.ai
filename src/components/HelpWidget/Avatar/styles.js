import ChatAvatar from './teamLogo.png';

export const styles = {
    chatWithOpenlineButton: {
        cursor: 'pointer',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        // Border
        borderRadius: '50%',
        // Background
        backgroundImage: `url(${ChatAvatar})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '64px',
        // Size
        width: '64px',
        height: '64px',
    },
    avatarHello: {
        // Position
        position: 'absolute',
        left: 'calc(-100% - 66px - 28px)',
        top: 'calc(50% - 36px)',
        // Layering
        zIndex: '10000',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        // Border
        padding: '12px 12px 12px 16px',
        borderRadius: '24px',
        // Color
        backgroundColor: '#f9f0ff',
        color: 'black',
    }
}