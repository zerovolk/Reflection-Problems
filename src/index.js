import { createRoot } from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './Components/ErrorPage.jsx';
import Problem from './routes/Problem';
import Root from './routes/Root';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'areYouPlayingBanjo',
                element: <Problem />
            }
        ]
    }
])

const root = createRoot(document.getElementById('root'))

root.render(
    <RouterProvider router={router} />
)
