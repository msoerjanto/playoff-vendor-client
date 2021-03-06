import { CardWidgetProps } from "./Card/Card"

export type WidgetType = "piechart" | "card"

export interface BaseWidgetProps {
    type: WidgetType
    width: number
    dataKey: string
    title: string
}

type WidgetProps = CardWidgetProps

// widget types expecting no children
export type VoidWidgetTypes =
    | "card"


export type OmitChildrenFromVoid<C extends React.ComponentType<BaseWidgetProps>> =
    C extends VoidWidgetTypes ?
        Omit<React.ComponentPropsWithRef<C>, 'children'>
        : React.ComponentPropsWithRef<C>

export default WidgetProps;
