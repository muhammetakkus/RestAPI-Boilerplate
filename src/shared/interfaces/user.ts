export interface User {
    id?: number;
    username?: string;
    email?: string;
    name?: string;
    lastname?: string;
    phone?: string;
    image?: string;
    role_id?: number | string ;
    is_verify?: boolean;
}