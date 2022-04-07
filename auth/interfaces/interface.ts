
export interface AuthResponse {
        token:         string;
        bearer:        string;
        nombreUsuario: string;
        authorities:   Authority[];
}
    
    export interface Authority {
        authority: string;
    }

export interface Usuario {
    nombre          : String;
    nombreUsuario   : String;
    email           : String;
    password        : String;
}
