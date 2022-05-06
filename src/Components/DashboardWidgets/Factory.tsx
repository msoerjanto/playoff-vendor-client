import { Grid } from "@mui/material";
import React from "react";
import CardWidget, { CardWidgetProps } from "./Card/Card";
import Widget, { WidgetType } from "./Widget";

export default function WidgetFactory<P extends Widget>(props: P) {
    const generateWidget = (type: WidgetType) => {
        switch(type) {
            case "card":
                const cardProps = props as CardWidgetProps
                return <CardWidget {...cardProps}/>
            default:
                return <div>Unsupported widget type</div>
        }
    }
    
    return <Grid item>
        {generateWidget(props.type)}
    </Grid>
    
}