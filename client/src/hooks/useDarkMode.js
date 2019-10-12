import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (bool) => {
	const [toggle, setToggle] = useLocalStorage(toggle, bool);

	useEffect(()=>{
		if(toggle){
			return document.querySelector(".App").classList.add('dark-mode')
		}else{
			return document.querySelector(".App").classList.remove('dark-mode')
		}
	}, [toggle])

	return [toggle, setToggle]

}