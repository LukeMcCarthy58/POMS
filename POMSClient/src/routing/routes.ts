import { createStackNavigator } from "@react-navigation/stack";

export enum MainRoutes {
    Loading = 'Loading',
    Home = 'Home',
    Orders = 'Orders',
    Detail = 'Detail',
}

export type MainStackParamList = {
    [MainRoutes.Loading]: undefined
    [MainRoutes.Home]: undefined
    [MainRoutes.Orders]: undefined
    [MainRoutes.Detail]: { orderId: string }
}

export const MainStack = createStackNavigator<MainStackParamList>()