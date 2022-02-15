import { useState, useEffect, } from 'react'; 
import { useParams, useLocation } from 'react-router-dom';

const useGetRouterParams = () => {
	const [ route, setRoute ] = useState({});
	const [ path, setPath ] = useState('');
	const params = useParams();
	const location = useLocation(); 


	useEffect(() => {
		setRoute(params);
		setPath(location.pathname);
	}, [ params, location ]);
	
	return { route, path }; 
}

export default useGetRouterParams; 