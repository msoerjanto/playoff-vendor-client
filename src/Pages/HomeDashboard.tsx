import { Container } from "@mui/material";
import React from "react"
import { Period } from "../Common/Time/Period";
import WidgetProps from "../Components/Widgets/Widget";
import WidgetGrid, { WidgetGridProps } from "../Components/Widgets/WidgetGrid";

const HomeDashboard = () => {

    const period: Period = {
        startTime: new Date(),
        endTime: new Date()
    }

    const widgets: WidgetProps[] = [
        {
            type: "card",
            width: 3,
            dataKey: "test",
            title: "Test card",
            period: period,
            description: "my first card",
            value: "50%",
        }
    ]
    
    const widgetGridProps: WidgetGridProps = {
        widgets: widgets,
        spacing: 2,
    }

    return <React.Fragment>
        <Container>
            <WidgetGrid {...widgetGridProps} />
        </Container>
    </React.Fragment>
}

export default HomeDashboard;