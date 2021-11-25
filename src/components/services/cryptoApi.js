import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// const cryptoApiHeaders ={
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': '6534bce4f9mshdbd0966edf256a7p1e06a6jsn686bc5664c61'
// }

const baseUrl = 'https://api.coinranking.com/v1/public';

const createRequest = (url) => ({ url});

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }), //baseUrl:baseurl 
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}&x-access-token=i-have-to-migrate-to-v2`)
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;