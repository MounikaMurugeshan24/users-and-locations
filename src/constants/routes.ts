type RouteType = {
    PATH: string;
    NAME: string;
    ICON: string
  };
   
const ROUTES : { [key: string]: RouteType } = {
    OVERVIEW : {
        PATH: '/overview',
        NAME: 'Overview',
        ICON: 'faGlobe'
    },
    ADD_USER : {
        PATH: '/addUser',
        NAME: 'Add User',
        ICON: 'faUserPlus'
    }
}


export { ROUTES }