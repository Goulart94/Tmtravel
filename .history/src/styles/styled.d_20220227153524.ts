import "styled-components";

declare module "styled-components"{
    export interface DefaultTheme{
        title:string;

        colors:{
           white: string;
           white100: string,
           gray100: string;
           gray300: string;
           gray700: string;
           gray850: string;
           gray900: string;
           cyan500: string;
           yellow300:string;
           blue700: string;

          
        }
    
    }
}
