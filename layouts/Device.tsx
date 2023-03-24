import { PropsWithChildren, useEffect, useState } from 'react';
import { detectMobileDevice, detectInAppBrowser } from 'utils/deviceDetector';

const Device = ({ children }: PropsWithChildren) => {
    const [mobileDevice, setMobileDevice] = useState(false);

    useEffect(() => {
        if (
            detectMobileDevice(window.navigator.userAgent) ||
            detectInAppBrowser(window.navigator.userAgent)
        ) {
            setMobileDevice(true);
        }
    }, []);

    return <div>{children}</div>;
};

export default Device;
