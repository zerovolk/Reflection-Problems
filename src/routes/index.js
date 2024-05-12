import ErrorPage from '@/Components/ErrorPage';
import Root from '@/routes/Root';
import { createBrowserRouter } from 'react-router-dom';
import FlattenDeeplyNestedArray from './FlattenDeeplyNestedArray';
import GroupAnagrams from './GroupAnagrams';
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
                path: 'flattenDeeplyNestedArray',
                element: <FlattenDeeplyNestedArray />
            }
        ]
    }
])
