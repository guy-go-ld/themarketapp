import {useEffect, useState} from "react";
import Mapi from "../mapi/Mapi";

export default function ResizableMap()
{
    const [size, setSize] = useState( '40vh')

    const updateSize = () =>
    {
        if (window.innerWidth >= 600)
        {
            setSize('80vh');
        } else
        {
            setSize('40vh');
        }
    }

    useEffect(() => {
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <div style={{ height: size }}>
            <Mapi />
        </div>
    );
}