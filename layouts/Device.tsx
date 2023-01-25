import { isMobile } from 'react-device-detect';
import { PropsWithChildren, useEffect, useState } from 'react';

const Device = ({ children }: PropsWithChildren) => {
    const [mobileDevice, setMobileDevice] = useState(false);

    useEffect(() => {
        if (isMobile) {
            setMobileDevice(true);
        }
    }, []);

    return <>{mobileDevice ? <div>{children}</div> : <div>pc 화면</div>}</>;
};

export default Device;
