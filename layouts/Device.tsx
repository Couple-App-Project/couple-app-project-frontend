import { PropsWithChildren, useEffect, useState } from 'react';
import { detectMobileDevice, detectInAppBrowser } from 'utils/functions';

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

    return <>{mobileDevice ? <div>{children}</div> : <div>pc 화면</div>}</>;
};

export default Device;
