import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { apis } from './apiKey';

// // await queryClient.prefetchQuery([])
export default function QueryFn() {
    const queryClient = useQueryClient();

    const query = useQuery({ queryKey: ['login'], queryFn: () => apis.login });
    // const { isLoading, error, data } = useQuery({
    //     queryKey: ['repoData'],
    //     queryFn: () =>
    //         fetch(
    //             'https://api.github.com/repos/tannerlinsley/react-query'
    //         ).then((res) => res.json()),
    // });

    if (query.isLoading) return 'Loading...';

    if (query.error) return 'An error has occurred: '; // + query.error.message;

    return (
        <div>
            {/* <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong>{' '}
            <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong> */}
        </div>
    );
}
