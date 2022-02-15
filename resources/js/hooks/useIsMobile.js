import { useState, useEffect } from 'react'; 
import debounce from 'lodash.debounce'

const useIsMobile = (pixels) => {
    const [ isMobile, setIsMobile ] = useState(false); 

    const def = () => {
        if (typeof window === 'undefined') return; 
        if (pixels) {
            setIsMobile(window.innerWidth <= pixels);
        } else {
            setIsMobile(window.innerWidth <= 768);
        }
        
    }

    const debouncedResize = debounce(def, 300)

    useEffect(() => {
        window.addEventListener('resize', debouncedResize); 
        return () => window.removeEventListener('resize', debouncedResize);
    }, [debouncedResize])

    useEffect(() => {
        def(); 
    })

    return isMobile
}

export default useIsMobile