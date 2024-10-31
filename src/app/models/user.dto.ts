export class UserDto {
    constructor(
        public name: string,
        public surnames: string,
        public dni: string,
        public phone: number,
        public sexo: string,
        public conocerWeb: string,
        public passwd: string,
        public confirmPasswd: string,
        public terms: boolean
    ) {}
}