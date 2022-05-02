import { Card, CardContent, CardHeader, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Period } from "../../../Common/Time/Period";
import { BaseWidgetProps } from "../Widget";

export interface CardWidgetProps extends BaseWidgetProps {
   period: Period;
   description: string;
   value: string;
}

export default function CardWidget(props: CardWidgetProps) {
    return <Card>
        <CardHeader title={props.title} sx={{color: 'text.secondary'}} />
        <CardContent>
            <Typography variant="h3" alignContent="center" gutterBottom>
                {props.value}
            </Typography>
            <Typography variant="body2">
                {props.description}
            </Typography>
        </CardContent>
    </Card>
}