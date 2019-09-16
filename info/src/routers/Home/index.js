export default {
    path : '/home',
    component : () => import('@/views/Home'),
    children : [
        {
            path : 'public/:title',
            components : { 
                detail : ()=> import('@/views/Public')
            },
            props : {
                detail : true
            }
        },
        {
            path : 'personinfo/:title',
            component : () => import('@/views/PersonInfo')
        },
        {
            path : 'educate/:title',
            component : () => import('@/views/Educate'),
        },
        {
            path : 'inter/:title',
            component : () => import('@/views/Inter')
        },
        {
            path : 'body',
            component : () => import('@/views/Body')
        },
        {
            path : '/home',
            redirect : '/home/body'
        }
    ],
}
