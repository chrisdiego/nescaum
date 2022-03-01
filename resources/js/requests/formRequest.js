import { API_URL } from "../constants/constants"

const getResourceByTitle = async ({title, limit, page}) => {
    let url = `${API_URL}/assets/documents?`;

    if (title) {
        url += `filter[title:contains]=${title}`
    }

    if (limit) {
        url += `&limit=${limit}`
    }

    if (page) {
        url += `&page=${page}`
    }

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "text/html; charset=UTF-8", 
        }, 
    }); 

    return response.json(); 
}

export {
    getResourceByTitle
}