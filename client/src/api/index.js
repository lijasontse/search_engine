import axios from 'axios';

export const fetchDataBySearch = (searchQuery) => axios.get(`/api/search?searchQuery=${searchQuery.searchTerm || 'none'}&tags=${searchQuery.tags}`)