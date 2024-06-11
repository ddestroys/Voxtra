import {Icons} from "../../../ui-kit/Icon";
import {PropsWithChildren} from "react";

export interface GetActionBar {
    icon: Icons,
    label: string;
    link: string
}

export interface MainLayoutProps extends PropsWithChildren{
    customContainer?:boolean;
}