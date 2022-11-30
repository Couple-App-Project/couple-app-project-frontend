import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apis } from './apiKey';

export default function QueryFn() {
    const queryClient = useQueryClient();

    const mutation = useMutation(apis.login, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['login'] });
        },
    });
}
