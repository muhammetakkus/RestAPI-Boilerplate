export interface Role {
    id?: number;
    role_name?: string;
    permissions?: string; // json stringify (object)
}