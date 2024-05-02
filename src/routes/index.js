import ErrorPage from '@/Components/ErrorPage';
import Root from '@/routes/Root';
import { createBrowserRouter } from 'react-router-dom';
import GroupAnagrams from './GroupAnagrams';
import TopKFrequent from './TopKFrequent';
import AreYouPlayingBanjo from './areYouPlayingBanjo';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'areYouPlayingBanjo',
                element: <AreYouPlayingBanjo />
            },
            {
                path: 'groupAnagrams',
                element: <GroupAnagrams />
            },
            {
                path: 'topKFrequent',
                element: <TopKFrequent />
            },
        ]
    }
])
