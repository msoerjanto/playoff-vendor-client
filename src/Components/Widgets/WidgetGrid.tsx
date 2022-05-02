import { Grid } from "@mui/material";
import React from "react";
import WidgetFactory from "./Factory";
import Widget from "./Widget";

export interface WidgetGridProps {
    widgets: Widget[];
    spacing: number
}

export default function WidgetGrid(props: WidgetGridProps) {
    return <Grid container spacing={props.spacing}>
        {
            props.widgets.map((widget) => {
                return <Grid item xs={12} sm={widget.width}>
                    <WidgetFactory {...widget} />
                </Grid>
            })
        }
    </Grid>
}